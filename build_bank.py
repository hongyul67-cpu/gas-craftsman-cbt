# -*- coding: utf-8 -*-
"""_작업/가스기능사 전사/_src/문항/*.json  →  data/bank.js (도구가 읽는 문제은행)

    python build_bank.py

먼저 전사 폴더에서 python 검수.py 를 돌려 _검수.json 을 만들어 둔다(과목·중복·법령 표시).

  기출  gi-*.json 19회차 × 60 = 1,140문항  → CBT 실전 회차 + 연습·종합 출제 대상
  예상  th-*.json 이론 챕터 「예상문제」      → 연습·종합 출제 대상

칸 이름을 짧게 줄이는 이유 — 문항 수가 많아 이름 길이가 그대로 파일 크기다.
  i 아이디 · r 회차/챕터 · n 책 문제 번호 · p 책 쪽 · q 발문 · o 보기4 · a 정답(0부터)
  e 해설 · u 과목(안전·장치·일반) · d 중복이면 먼저 나온 아이디 · l 법령 확인 메모
  x 1이면 보기를 섞지 말 것 (해설이 「①, ③은 …」 처럼 보기 번호를 가리킴)

검수용 칸(whyNote·conf 등)은 화면에 안 내보낸다.
"""
import io, os, re, json, sys, glob, datetime

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
HERE = os.path.dirname(os.path.abspath(__file__))
SRC  = os.path.join(HERE, "..", "_작업", "가스기능사 전사", "_src", "문항")
OUT  = os.path.join(HERE, "data", "bank.js")

NUMMARK = re.compile(r"[①②③④]")


def row(it, rk, chk):
    o = it["choices"]
    assert len(o) == 4, (it["id"], "보기가 4개가 아님")
    a = it["answer"] - 1
    assert 0 <= a <= 3, (it["id"], "정답 번호 이상")
    k = chk.get(it["id"])
    assert k, (it["id"], "_검수.json 에 없음 — python 검수.py 를 다시 돌리세요")
    r = {"i": it["id"], "r": rk, "p": it["page"], "q": it["q"], "o": o, "a": a,
         "e": it.get("why", ""), "u": k["subj"]}
    if it.get("no"):
        r["n"] = it["no"]
    if k.get("dupOf"):
        r["d"] = k["dupOf"]
    if k.get("lawCheck"):
        r["l"] = k["lawCheck"]
    if NUMMARK.search(r["q"] + " " + r["e"] + " " + " ".join(o) + " " + r.get("l", "")):
        r["x"] = 1
    return r


def main():
    chk = json.load(io.open(os.path.join(SRC, "_검수.json"), encoding="utf-8"))
    rounds, bank, exams = [], [], []

    for f in sorted(glob.glob(os.path.join(SRC, "gi-*.json"))):
        d = json.load(io.open(f, encoding="utf-8"))
        rk = d["round"]
        items = [row(it, rk, chk) for it in d["items"]]
        assert len(items) == 60, (f, len(items))
        items.sort(key=lambda r: r["n"])
        y, h = rk.split("-")
        t = "%s년 %s회" % (y, "1·2" if h == "12" else h)
        bank += items
        rounds.append({"k": rk, "t": t, "g": "기출", "p": d["pages"], "n": len(items)})
        exams.append({"k": rk, "t": t, "full": d["title"], "p": d["pages"], "ids": [r["i"] for r in items]})

    for f in sorted(glob.glob(os.path.join(SRC, "th-*.json"))):
        d = json.load(io.open(f, encoding="utf-8"))
        rk = d["chapter"]
        items = [row(it, rk, chk) for it in d["items"]]
        bank += items
        rounds.append({"k": rk, "t": d["chapterTitle"], "g": "예상문제", "p": d["pages"], "n": len(items)})

    ids = [r["i"] for r in bank]
    assert len(ids) == len(set(ids)), "아이디가 겹칩니다"
    bad = [r["i"] for r in bank if r.get("d") and r["d"] not in set(ids)]
    assert not bad, ("dupOf 가 없는 문항을 가리킴", bad[:5])
    dup = sum(1 for r in bank if "d" in r)
    nox = sum(1 for r in bank if "x" in r)
    nlaw = sum(1 for r in bank if "l" in r)
    ngi = sum(len(e["ids"]) for e in exams)

    def dump(v):
        return json.dumps(v, ensure_ascii=False, separators=(",", ":"))

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with io.open(OUT, "w", encoding="utf-8") as w:
        w.write("/* 가스기능사 필기 — 문제은행 (자동 생성, 손으로 고치지 마세요)\n")
        w.write("   만든 날 %s · build_bank.py 가 _작업/가스기능사 전사/_src/문항/*.json 에서 구움\n" % datetime.date.today())
        w.write("   기출 %d회 %d · 예상문제 %d = %d문항 (중복표시 %d · 보기섞기 제외 %d · 법령확인 %d)\n"
                % (len(exams), ngi, len(bank) - ngi, len(bank), dup, nox, nlaw))
        w.write("   ⚠ 시중 교재 문항입니다. 평문 그대로 공개 저장소에 올리지 마세요. */\n")
        w.write("window.GAS_BUILT=%s;\n" % dump(str(datetime.date.today())))
        w.write("window.GAS_ROUNDS=%s;\n" % dump(rounds))
        w.write("window.GAS_EXAMS=%s;\n" % dump(exams))
        w.write("window.GAS_BANK=[\n")
        w.write(",\n".join(dump(r) for r in bank))
        w.write("\n];\n")

    kb = os.path.getsize(OUT) / 1024
    print("  ✔ %s" % OUT)
    print("     기출 %d회 %d · 예상문제 %d · 합 %d문항 · %.0f KB"
          % (len(exams), ngi, len(bank) - ngi, len(bank), kb))
    print("     중복(dupOf) %d · 보기섞기 제외 %d · 법령확인 %d" % (dup, nox, nlaw))
    import collections
    print("     과목", dict(collections.Counter(r["u"] for r in bank)))


if __name__ == "__main__":
    main()
