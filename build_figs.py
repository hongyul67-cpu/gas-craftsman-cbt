"""figs.js 의 「가져온 그림」 구역을 짝 도구(가스기능사 마스터)의 최신 figs.js 로 다시 채운다.

    python build_figs.py

figs.js 는 두 덩어리다.
  ① 가져온 그림   (/*@@COPY …@@*/ … /*@@END COPY@@*/) — 이 스크립트가 덮어쓴다(손대지 말 것)
  ② 문항 ↔ 그림 대응표 QFIG (/*@@QFIG@@*/ … /*@@END QFIG@@*/) — 손으로 고친다

마스터의 그림을 고쳤으면 이 스크립트를 한 번 돌리면 된다(마스터는 _작업/가스기능사 전사/build_master.py 로 조립).
가져온 그림은 마스터 figs.js 를 통째로 함수 하나로 감싸 넣는다 — 마스터 116장을 이름 그대로 쓴다.
마스터 figs.js 의 PART 02·03 그림은 읽힐 때 window.FIG 가 있어야 등록되므로,
index.html 에서 links/fig.js 를 figs.js 보다 먼저 부른다(둘 다 defer — 순서대로 실행됨).
"""
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT = os.path.join(HERE, 'figs.js')
SRC = os.path.join(ROOT, '가스기능사 마스터', 'figs.js')


def copy_block():
    src = open(SRC, encoding='utf-8').read()
    if 'window.GAS_FIGS_RAW' not in src or 'var FIGS = window.FIGS' not in src:
        sys.exit('마스터 figs.js 모양이 달라졌습니다: ' + SRC)
    return ('/*@@COPY — build_figs.py 가 채운다. 손대지 말 것@@*/\n'
            '/* ── 복사본: 가스기능사 마스터/figs.js ── */\n'
            '(function () {\n%s\n})();\n'
            '/*@@END COPY@@*/') % src.rstrip()


def main():
    cur = open(OUT, encoding='utf-8').read()
    if '/*@@COPY' not in cur:
        sys.exit('figs.js 에 /*@@COPY@@*/ 자리가 없습니다')
    new = re.sub(r'/\*@@COPY.*?/\*@@END COPY@@\*/', lambda m: copy_block(), cur, flags=re.S)
    open(OUT, 'w', encoding='utf-8', newline='\n').write(new)
    n = len(re.findall(r"^\s*'[^']+': '", new.split('/*@@QFIG@@*/')[1], re.M))
    print('figs.js 다시 구움 — 대응표 그림 %d장, 크기 %d KB' % (n, len(new.encode('utf-8')) // 1024))


if __name__ == '__main__':
    main()
