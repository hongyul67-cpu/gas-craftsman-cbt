/* ══════════════════════════════════════════════════════════════
   가스기능사 필기 CBT — 해설 그림 (26번 칸 · 2026-11-27)
   공용 그리기 도우미 links/fig.js 를 쓴다. 이 도구에는 배우기 화면이 없어서
   문제를 푼 뒤 보는 해설(연습 · 종합시험 결과 · CBT 실전 결과 · 오답노트) 아래에 그림을 한 장 붙인다.

   두 덩어리
     ① 가져온 그림  (COPY 표식) — 가스기능사 마스터/figs.js(116장) 복사본. 새로 그린 그림은 없다.
                                    build_figs.py 가 덮어쓴다. 마스터 그림을 고친 뒤 python build_figs.py
     ② QFIG 대응표  (QFIG 표식) — 그림 키 : 문항 아이디들. 문항 글은 없다(아이디만) → 평문으로 둔다.
                                    손으로 고친다. 중복 문항(dupOf)도 원본과 같은 그림으로 적어 두었다.

   대응표는 그림 캡션·그림 속 글자와 문항·보기 글자를 맞대 후보를 뽑은 뒤 하나씩 눈으로 걸렀다.
   그림이 그 문항의 답·해설을 실제로 보여 주는 것만 남겼다(법령 주기·점검 횟수처럼 그림에 없는 수치는 붙이지 않음).
   원문항 238개 + 중복 116개 = 354문항 · 그림 90장 사용.

   해설은 답을 고른 뒤에만 보이고, 종합·CBT 실전은 다 끝난 뒤 오답노트에만 나오므로
   그림이 정답을 미리 보여 주는 일은 없다 → 이름표를 가리지 않는다(labels 그대로).
   ══════════════════════════════════════════════════════════════ */
/*@@COPY — build_figs.py 가 채운다. 손대지 말 것@@*/
/* ── 복사본: 가스기능사 마스터/figs.js ── */
(function () {
/* ══════════════════════════════════════════════════════════════
   가스기능사 마스터 — 그림 모음 (자동 조립 · _작업/가스기능사 전사/build_master.py)
   원본: _src/그림SVG/figs-p1.js · figs-p2.js · figs-p3.js (10~12번 칸). 여기서 고치지 말고 원본을 고친 뒤 다시 조립.
   공용 links/fig.js 로 직접 그린 SVG. 교재 그림을 잘라 쓰거나 따라 그리지 않았다.
   window.FIGS[key] = { cap, chap, page, heading, cards, draw } — 카드 연결은 index.html 이
   chap + 제목(cards 또는 heading) + 가장 가까운 쪽 번호로 한다(같은 제목 카드가 챕터 안에 여럿이라).
   ══════════════════════════════════════════════════════════════ */
window.GAS_FIGS_RAW = [];

/* ───── figs-p1.js ───── */
/* ══════════════════════════════════════════════════════════════
   가스기능사 — PART 01 가스일반 + 시험 직전 공식·요점정리 그림 (10번 칸 · 2026-11-27)

   공용 그리기 도우미 links/fig.js 로 **새로 그린 SVG** 다. 교재 그림은 잘라 쓰지도, 따라 그리지도 않았다.
   (교재 PART 01 에 있는 그림은 토리첼리 관 · 물의 상태 변화 · 줄의 실험 세 장뿐이라
    나머지는 배우기 카드에 꼭 필요한 것을 골라 새로 짰다.)
   수치는 교재(배우기 카드 _src/배우기/p1c1~3.js · 요점.js)에 있는 것만 썼다.
   교재 값으로 계산한 예(위험도·확산속도)는 캡션에 「계산 예」라고 적었다.

   한 칸의 모양 (_작업/가스기능사 전사/문항-형식.md 4번)
     key     'p1-…'  (겹치지 않게)
     chap    p1c1 · p1c2 · p1c3 · yo(공식·요점정리)
     heading 책의 소제목 글자 그대로 = 배우기 카드 t (이 글자로 카드에 붙는다)
     cards   이 그림이 **실제로 보여 주는** 카드 제목 전부(heading 포함). 14번 칸이 figs.js 로 합칠 때 쓴다.
     cap     캡션 한 줄
     draw    SVG 문자열을 돌려주는 함수 — FIG 는 그릴 때 찾는다(이 파일이 fig.js 보다 먼저 읽혀도 안 깨짐)

   정답 이름표 — 슬라이드 빈칸의 답이 되는 글자는 ans:true 로 그렸다. 슬라이드는 labels:false 로 ? 를 보인다.
   색 견본처럼 글자가 아닌 정답은 ans() 로 감싸 labels:false 일 때 숨긴다.
   ══════════════════════════════════════════════════════════════ */
window.GAS_FIGS_RAW = window.GAS_FIGS_RAW || [];
(function () {
  var RAW = window.GAS_FIGS_RAW;
  function add(key, chap, page, heading, cards, cap, draw) {
    RAW.push({ key: key, chap: chap, page: page, heading: heading, cards: cards, cap: cap, draw: draw });
  }

  /* ── 작은 도우미 ─────────────────────────── */
  function r1(v) { return Math.round(v * 10) / 10; }
  function T(x, y, s, o) { o = o || {}; if (o.a == null) o.a = 'm'; return FIG.t(x, y, s, o); }
  function S(x, y, s, o) { o = o || {}; if (!o.size) o.size = 13; if (!o.c) o.c = FIG.C.sub; if (o.a == null) o.a = 'm'; return FIG.t(x, y, s, o); }
  function dot(x, y, r, c) { return '<circle cx="' + r1(x) + '" cy="' + r1(y) + '" r="' + (r || 3) + '" fill="' + (c || FIG.C.ink) + '"/>'; }
  function rect(x, y, w, h, fill, o) {
    o = o || {};
    return '<rect x="' + r1(x) + '" y="' + r1(y) + '" width="' + r1(w) + '" height="' + r1(h) + '" rx="' + (o.r || 0) +
      '" fill="' + fill + '"' + (o.op != null ? ' opacity="' + o.op + '"' : '') +
      (o.c ? ' stroke="' + o.c + '" stroke-width="' + (o.w || 1.4) + '"' : '') + '/>';
  }
  /* 슬라이드(labels:false)에서 숨길 묶음 — 색 견본처럼 글자 아닌 정답 */
  function ans(body) { return '<g class="fig-ans">' + body + '</g>'; }
  function seeded(seed) { var s = seed % 2147483647; if (s <= 0) s += 2147483646; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
  /* 상자 안에 점(분자)을 겹치지 않게 흩뿌린다 — seed 가 같으면 늘 같은 자리 */
  function scatter(x, y, w, h, n, r, c, seed, gap) {
    var rnd = seeded(seed || 7), pts = [], out = '', tries = 0, g = (gap || 3.2) * r;
    while (pts.length < n && tries < n * 80) {
      tries++;
      var px = x + r + rnd() * (w - 2 * r), py = y + r + rnd() * (h - 2 * r), ok = true;
      for (var i = 0; i < pts.length; i++) { var dx = pts[i][0] - px, dy = pts[i][1] - py; if (dx * dx + dy * dy < g * g) { ok = false; break; } }
      if (ok) { pts.push([px, py]); out += dot(px, py, r, c); }
    }
    return out;
  }
  function flame(cx, cy, s, o) {
    o = o || {};
    var d = 'M' + r1(cx) + ',' + r1(cy - s) + ' C' + r1(cx + s * 0.75) + ',' + r1(cy - s * 0.15) + ' ' + r1(cx + s * 0.62) + ',' + r1(cy + s * 0.72) + ' ' + r1(cx) + ',' + r1(cy + s * 0.72) +
      ' C' + r1(cx - s * 0.62) + ',' + r1(cy + s * 0.72) + ' ' + r1(cx - s * 0.75) + ',' + r1(cy - s * 0.15) + ' ' + r1(cx) + ',' + r1(cy - s) + ' Z';
    return FIG.path(d, { fill: o.fill || FIG.C.orangeL, c: o.c || FIG.C.orange, w: o.w || 1.6 });
  }
  function star(cx, cy, ro, ri, n, o) {
    o = o || {};
    var p = [];
    for (var i = 0; i < n * 2; i++) { var a = -Math.PI / 2 + i * Math.PI / n, r = i % 2 ? ri : ro; p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
    return FIG.poly(p, { close: 1, fill: o.fill || FIG.C.orangeL, c: o.c || FIG.C.orange, w: o.w || 1.4 });
  }
  /* 가스 용기(어깨가 둥근 원통) — 몸통 path 와 밸브 */
  function cyl(cx, top, w, h, o) {
    o = o || {};
    var x0 = cx - w / 2, x1 = cx + w / 2, sh = w * 0.34, b = top + h;
    var d = 'M' + r1(x0) + ',' + r1(top + sh) + ' Q' + r1(x0) + ',' + r1(top) + ' ' + r1(cx) + ',' + r1(top) + ' Q' + r1(x1) + ',' + r1(top) + ' ' + r1(x1) + ',' + r1(top + sh) +
      ' L' + r1(x1) + ',' + r1(b - 8) + ' Q' + r1(x1) + ',' + r1(b) + ' ' + r1(x1 - 8) + ',' + r1(b) + ' L' + r1(x0 + 8) + ',' + r1(b) + ' Q' + r1(x0) + ',' + r1(b) + ' ' + r1(x0) + ',' + r1(b - 8) + ' Z';
    return (o.noBody ? '' : FIG.path(d, { fill: o.fill || '#fff', c: o.c || FIG.C.ink, w: 2 })) +
      FIG.box(cx - 8, top - 15, 16, 15, { fill: FIG.C.grayM, c: FIG.C.ink, r: 2, w: 1.4 }) +
      FIG.line(cx - 13, top - 15, cx + 13, top - 15, { w: 2.6 });
  }
  function cylOutline(cx, top, w, h, o) { o = o || {}; o.fill = 'none'; return cyl(cx, top, w, h, o); }
  function axes(x0, y0, w, h, xl, yl) {
    var c = FIG.C.sub;
    return FIG.arrow(x0, y0, x0 + w, y0, { c: c, w: 1.4, head: 9 }) + FIG.arrow(x0, y0, x0, y0 - h, { c: c, w: 1.4, head: 9 }) +
      (xl ? FIG.t(x0 + w + 4, y0, xl, { size: 13, c: c, a: 's' }) : '') +
      (yl ? FIG.t(x0 + 8, y0 - h + 4, yl, { size: 13, c: c, a: 's' }) : '');
  }
  /* 그림 맨 아래 흐린 한 줄 */
  function foot(w, y, s) { return S(w / 2, y, s); }

  /* ═══════════ CHAPTER 01 가스의 기초 (18–25쪽) ═══════════ */

  add('p1-hp-range', 'p1c1', 18, '압축가스',
    ['압축가스', '아세틸렌가스', '액화가스', '액화시안화수소·액화브롬화메탄 및 액화산화에틸렌가스'],
    '고압가스 적용범위 — 가스마다 「몇 [℃]에서 몇 [MPa]」 기준이 다르다',
    function () {
      var C = FIG.C, s = '';
      var rows = [
        ['압축가스', '상용온도에서 1[MPa] 이상', '또는 35[℃]에서 1[MPa] 이상', C.blue, C.blueL],
        ['액화가스', '상용온도에서 0.2[MPa] 이상', '또는 0.2[MPa]이 되는 온도가 35[℃] 이하', C.green, C.greenL],
        ['아세틸렌가스', '15[℃]에서 0[Pa] 초과', '', C.orange, C.orangeL],
        ['액화시안화수소 ·\n브롬화메탄 · 산화에틸렌', '35[℃]에서 0[Pa] 초과', '', C.purple, C.purpleL]
      ];
      s += T(240, 22, '이 조건이면 법이 다루는 「고압가스」', { b: 1 });
      rows.forEach(function (r, i) {
        var y = 42 + i * 60;
        s += FIG.box(14, y, 164, 52, { fill: r[4], c: r[3], r: 8 });
        s += T(96, y + 26, r[0], { b: 1, c: r[3], size: i === 3 ? 13 : 16, halo: false });
        if (r[2]) {
          s += FIG.t(192, y + 15, r[1], { b: 1, ans: true });
          s += FIG.t(192, y + 40, r[2], { size: 13, c: C.sub, halo: false });
        } else s += FIG.t(192, y + 26, r[1], { b: 1, ans: true });
      });
      s += foot(480, 288, '압력은 게이지 압력 · 상용온도 = 평소 쓰는 온도');
      return FIG.svg(480, 302, s);
    });

  add('p1-gas-state', 'p1c1', 19, '상태에 따른 분류',
    ['상태에 따른 분류', '상태에 따른 고압가스 분류'],
    '저장 상태에 따른 분류 — 기체 그대로 압축 · 눌러서 액체로 · 용제에 녹여서',
    function () {
      var C = FIG.C, s = '', xs = [88, 240, 392], top = 60, w = 78, h = 146;
      var name = ['압축가스', '액화가스', '용해가스'], col = [C.blue, C.green, C.orange];
      var desc = [['압축해도 액화 안 됨', '→ 기체 그대로 압축'], ['압력을 가하면', '쉽게 액체가 됨'], ['용제 속에', '녹여서 저장']];
      var ex = [['H₂ · O₂ · CO · CH₄'], ['C₃H₈ · C₄H₁₀ · Cl₂', 'NH₃ · CO₂ · HCN'], ['C₂H₂ (아세틸렌)']];
      for (var i = 0; i < 3; i++) {
        var cx = xs[i];
        s += cyl(cx, top, w, h, { fill: '#fff' });
        if (i === 0) s += scatter(cx - 32, top + 28, 64, h - 36, 22, 3.4, C.blue, 11);
        if (i === 1) {
          s += rect(cx - 37, top + 66, 74, h - 70, C.blueL, { r: 6 });
          s += FIG.path('M' + (cx - 37) + ',' + (top + 66) + ' q9,-5 18,0 t18,0 t18,0 t20,0', { c: C.blue, w: 1.4 });
          s += scatter(cx - 30, top + 26, 60, 34, 5, 3.2, C.green, 5);
          s += scatter(cx - 32, top + 74, 64, h - 82, 16, 2.4, C.blue, 9, 2.6);
        }
        if (i === 2) {
          s += rect(cx - 37, top + 26, 74, h - 30, C.grayL, { r: 6 });
          for (var gx = cx - 30; gx <= cx + 30; gx += 12) for (var gy = top + 36; gy <= top + h - 10; gy += 12)
            s += '<circle cx="' + gx + '" cy="' + gy + '" r="4.2" fill="none" stroke="' + C.line + '" stroke-width="1.2"/>';
          s += scatter(cx - 32, top + 30, 64, h - 40, 14, 2.6, C.orange, 3);
        }
        s += cylOutline(cx, top, w, h);
        s += T(cx, 32, name[i], { b: 1, c: col[i], ans: true });
        s += S(cx, top + h + 20, desc[i][0], { c: C.ink }) + S(cx, top + h + 37, desc[i][1], { c: C.ink });
        ex[i].forEach(function (e, k) { s += T(cx, 278 + k * 24 - (ex[i].length - 1) * 12, e, { size: 14, b: 1 }); });
      }
      return FIG.svg(480, 306, s);
    });

  add('p1-flammability', 'p1c1', 19, '연소성에 따른 분류',
    ['연소성에 따른 분류'],
    '연소성에 따른 분류 — 스스로 타는 가연성 · 타는 것을 돕는 조연성 · 타지 않는 불연성',
    function () {
      var C = FIG.C, s = '';
      var cols = [
        { x: 14, w: 172, name: '가연성 가스', c: C.orange, f: C.orangeL, d: ['스스로 탄다'], ex: ['C₂H₂ · C₃H₈', 'C₄H₁₀ · CO', 'CH₄ · H₂'] },
        { x: 194, w: 136, name: '조연성 가스', c: C.blue, f: C.blueL, d: ['자신은 타지 않고', '연소를 돕는다', '(지연성)'], ex: ['O₂ · O₃', 'Cl₂ · F₂', 'NO'] },
        { x: 338, w: 128, name: '불연성 가스', c: C.sub, f: C.grayL, d: ['타지 않는다', '→ 치환(purge)용'], ex: ['N₂ · CO₂', 'Ar · He', 'Ne'] }
      ];
      cols.forEach(function (k, i) {
        var cx = k.x + k.w / 2;
        s += FIG.box(k.x, 20, k.w, 258, { fill: '#fff', c: k.c, r: 10 });
        s += FIG.box(k.x, 20, k.w, 40, { fill: k.f, c: k.c, r: 10, label: k.name, lc: k.c, ans: true });
        var dy = i === 0 ? 84 : 112 - (k.d.length - 1) * 9;
        k.d.forEach(function (ln, j) { s += T(cx, dy + j * 18, ln, { size: 14 }); });
        k.ex.forEach(function (e, j) { s += T(cx, 206 + j * 24, e, { size: 15, b: 1 }); });
      });
      s += FIG.box(24, 104, 152, 70, { fill: C.yellowL, c: C.orange, r: 6, w: 1 });
      s += T(100, 122, '폭발하한 10[%] 이하', { size: 13, b: 1, ans: true, halo: false }) +
        S(100, 140, '또는', { halo: false }) +
        T(100, 158, '상한−하한 20[%] 이상', { size: 13, b: 1, ans: true, halo: false });
      return FIG.svg(480, 292, s);
    });

  add('p1-venn', 'p1c1', 20, '독성에 의한 분류',
    ['독성에 의한 분류', '연소성에 따른 분류'],
    '가연성과 독성은 따로 따진다 — 두 원이 겹치는 가스(CO · NH₃ · HCN · H₂S · C₂H₄O)는 둘 다',
    function () {
      var C = FIG.C, s = '';
      s += T(240, 20, '독성가스 = 허용농도 5,000[ppm] 이하', { b: 1, size: 15 });
      s += '<circle cx="185" cy="152" r="102" fill="' + C.orangeL + '" opacity="0.75" stroke="' + C.orange + '" stroke-width="2"/>';
      s += '<circle cx="295" cy="152" r="102" fill="' + C.purpleL + '" opacity="0.6" stroke="' + C.purple + '" stroke-width="2"/>';
      s += T(104, 52, '가연성', { b: 1, c: C.orange }) + T(376, 52, '독성', { b: 1, c: C.purple });
      ['H₂', 'CH₄', 'C₃H₈', 'C₂H₂'].forEach(function (g, i) { s += T(128, 112 + i * 26, g, { size: 15 }); });
      s += S(240, 76, '둘 다', { b: 1, c: C.ink });
      ['CO', 'NH₃', 'HCN', 'H₂S', 'C₂H₄O'].forEach(function (g, i) { s += T(240, 102 + i * 25, g, { size: 15, b: 1, ans: true }); });
      s += T(352, 112, 'Cl₂ · F₂', { size: 15 }) + S(352, 131, '(조연성)');
      s += T(352, 172, 'SO₂ · COCl₂', { size: 15 }) + S(352, 191, '(불연성)');
      s += T(240, 278, '둘 다 아님 : O₂(조연성) · N₂ · CO₂ · Ar · He', { size: 14 });
      return FIG.svg(480, 296, s);
    });

  add('p1-boyle', 'p1c1', 21, '보일(Boyle)의 법칙',
    ['보일(Boyle)의 법칙', '이상기체의 법칙(P = V = T)'],
    '보일의 법칙 — 온도가 일정하면 P×V 가 일정(두 직사각형의 넓이가 같다)',
    function () {
      var C = FIG.C, s = '', x0 = 56, y0 = 236;
      function X(v) { return x0 + v * 125; } function Y(p) { return y0 - p * 62; }
      var v1 = 0.55, v2 = 1.4, p1 = 1 / v1, p2 = 1 / v2;
      s += rect(x0, Y(p2), X(v2) - x0, y0 - Y(p2), C.orangeL, { op: 0.9 });
      s += rect(x0, Y(p1), X(v1) - x0, y0 - Y(p1), C.blueL, { op: 0.8 });
      var pts = []; for (var v = 0.36; v <= 2.1001; v += 0.04) pts.push([X(v), Y(1 / v)]);
      s += FIG.poly(pts, { c: C.ink, w: 2.4 });
      s += FIG.line(X(v1), Y(p1), X(v1), y0, { c: C.blue, w: 1.2, dash: '4 3' }) + FIG.line(x0, Y(p1), X(v1), Y(p1), { c: C.blue, w: 1.2, dash: '4 3' });
      s += FIG.line(X(v2), Y(p2), X(v2), y0, { c: C.orange, w: 1.2, dash: '4 3' }) + FIG.line(x0, Y(p2), X(v2), Y(p2), { c: C.orange, w: 1.2, dash: '4 3' });
      s += dot(X(v1), Y(p1), 5, C.blue) + dot(X(v2), Y(p2), 5, C.orange);
      s += axes(x0, y0, 282, 206, 'V', 'P');
      s += FIG.t(X(v1), y0 + 16, 'V₁', { size: 14, a: 'm', c: C.blue, b: 1 }) + FIG.t(X(v2), y0 + 16, 'V₂', { size: 14, a: 'm', c: C.orange, b: 1 });
      s += FIG.t(x0 - 8, Y(p1), 'P₁', { size: 14, a: 'e', c: C.blue, b: 1 }) + FIG.t(x0 - 8, Y(p2), 'P₂', { size: 14, a: 'e', c: C.orange, b: 1 });
      s += T(408, 52, 'T 일정', { b: 1, c: C.blue });
      s += FIG.box(352, 72, 112, 40, { fill: C.yellowL, c: C.orange, r: 8, label: 'P₁V₁ = P₂V₂', size: 16 });
      s += T(408, 140, '압력 ↑ → 부피 ↓', { size: 14 });
      s += T(408, 164, '반비례', { b: 1, c: C.red, ans: true });
      s += S(408, 206, 'P : 압력[kg/cm²]') + S(408, 226, 'V : 부피[L]');
      return FIG.svg(480, 272, s);
    });

  add('p1-charles', 'p1c1', 21, '샤를(Charle)의 법칙',
    ['샤를(Charle)의 법칙', '이상기체의 법칙(P = V = T)'],
    '샤를의 법칙 — 압력이 일정하면 부피는 절대온도에 비례(직선을 늘이면 0[K] = −273[℃]에서 0)',
    function () {
      var C = FIG.C, s = '', x0 = 60, y0 = 222;
      function X(t) { return x0 + t * 0.42; } function Y(t) { return y0 - t * 0.3; }
      s += FIG.line(X(0), Y(0), X(200), Y(200), { c: C.sub, w: 1.6, dash: '5 4' });
      s += FIG.line(X(200), Y(200), X(560), Y(560), { c: C.ink, w: 2.4 });
      var t1 = 380, t2 = 520;
      [[t1, C.blue, 'V₁', 'T₁'], [t2, C.orange, 'V₂', 'T₂']].forEach(function (p) {
        s += FIG.line(X(p[0]), Y(p[0]), X(p[0]), y0, { c: p[1], w: 1.2, dash: '4 3' }) + FIG.line(x0, Y(p[0]), X(p[0]), Y(p[0]), { c: p[1], w: 1.2, dash: '4 3' });
        s += dot(X(p[0]), Y(p[0]), 5, p[1]);
        s += FIG.t(X(p[0]), y0 + 16, p[3], { size: 14, a: 'm', c: p[1], b: 1 }) + FIG.t(x0 - 8, Y(p[0]), p[2], { size: 14, a: 'e', c: p[1], b: 1 });
      });
      s += axes(x0, y0, 250, 186, 'T[K]', 'V');
      s += FIG.line(X(273), y0 - 4, X(273), y0 + 4, { c: C.sub, w: 1.4 });
      s += FIG.t(x0, y0 + 16, '0[K]', { size: 13, a: 'm', c: C.sub }) + FIG.t(X(273), y0 + 16, '273', { size: 13, a: 'm', c: C.sub });
      s += FIG.t(x0, y0 + 36, '−273[℃]', { size: 13, a: 'm', c: C.red, ans: true }) + FIG.t(X(273), y0 + 36, '0[℃]', { size: 13, a: 'm', c: C.red });
      s += T(412, 50, 'P 일정', { b: 1, c: C.blue });
      s += FIG.box(356, 70, 112, 40, { fill: C.yellowL, c: C.orange, r: 8, label: 'V₁/T₁ = V₂/T₂', size: 15 });
      s += T(412, 138, '절대온도에', { size: 14 });
      s += T(412, 160, '비례', { b: 1, c: C.red, ans: true });
      s += S(412, 200, 'T : 절대온도[K]') + S(412, 220, 'K = 273 + ℃');
      return FIG.svg(480, 270, s);
    });

  add('p1-boyle-charles', 'p1c1', 21, '보일-샤를(Boyle-Charle)의 법칙',
    ['보일-샤를(Boyle-Charle)의 법칙', '보일·샤를의 법칙', '이상기체의 법칙(P = V = T)'],
    '보일-샤를의 법칙 — 부피는 압력에 반비례(보일), 절대온도에 비례(샤를)',
    function () {
      var C = FIG.C, s = '';
      s += FIG.box(186, 26, 108, 60, { fill: C.greenL, c: C.green, r: 10, label: 'V 부피', lc: C.green, size: 18 });
      s += FIG.box(22, 126, 128, 52, { fill: C.blueL, c: C.blue, r: 10, label: 'P 압력', lc: C.blue });
      s += FIG.box(330, 126, 128, 52, { fill: C.orangeL, c: C.orange, r: 10, label: 'T 절대온도', lc: C.orange });
      s += FIG.arrow(120, 126, 192, 88, { c: C.blue, w: 2 });
      s += FIG.arrow(360, 126, 288, 88, { c: C.orange, w: 2 });
      s += FIG.t(124, 96, '반비례', { b: 1, c: C.blue, a: 'e', ans: true }) + FIG.t(116, 116, '보일의 법칙', { size: 13, c: C.sub, a: 'e' });
      s += FIG.t(356, 96, '비례', { b: 1, c: C.orange, a: 's', ans: true }) + FIG.t(364, 116, '샤를의 법칙', { size: 13, c: C.sub, a: 's' });
      s += FIG.box(80, 198, 320, 44, { fill: C.yellowL, c: C.orange, r: 8, label: 'P₁V₁/T₁ = P₂V₂/T₂', size: 18 });
      s += foot(480, 262, 'V₁ = T₁P₂V₂/(P₁T₂) · 온도는 꼭 절대온도[K]로');
      return FIG.svg(480, 278, s);
    });

  add('p1-ideal-gas', 'p1c1', 22, '이상기체 상태방정식(Ideal gas equation)',
    ['이상기체 상태방정식(Ideal gas equation)', '이상기체상태의 방정식', '몰과 기체부피와의 관계(아보가드로 법칙)'],
    '표준상태(0[℃], 1[atm])에서 기체 1[mol] = 22.4[L] — 여기서 R = 0.082 가 나온다',
    function () {
      var C = FIG.C, s = '';
      var fx = 34, fy = 74, a = 112, d = 30;
      s += FIG.poly([[fx, fy], [fx + d, fy - d], [fx + a + d, fy - d], [fx + a, fy]], { close: 1, fill: C.blueL, c: C.blue, w: 1.6 });
      s += FIG.poly([[fx + a, fy], [fx + a + d, fy - d], [fx + a + d, fy + a - d], [fx + a, fy + a]], { close: 1, fill: C.blueL, c: C.blue, w: 1.6 });
      s += FIG.box(fx, fy, a, a, { fill: '#fff', c: C.blue, r: 0, w: 1.8 });
      s += scatter(fx + 6, fy + 44, a - 12, a - 50, 12, 2.6, C.blue, 21);
      s += T(fx + a / 2, fy + 18, '1[mol]', { b: 1, c: C.blue, halo: false });
      s += T(fx + a / 2, fy + 38, '22.4[L]', { b: 1, ans: true, halo: false });
      s += S(fx + (a + d) / 2, 214, '0[℃](273[K]) · 1[atm]', { c: C.ink });
      s += S(fx + (a + d) / 2, 234, '분자 6.02×10²³개');
      var x = 214;
      s += FIG.t(x, 58, 'PV = nRT', { size: 22, b: 1, c: C.blue });
      s += FIG.t(x, 98, 'R = PV/nT', { size: 15 });
      s += FIG.t(x, 124, '= (1 × 22.4)/(1 × 273)', { size: 15 });
      s += FIG.t(x, 152, '= 0.082 [L·atm/K·mol]', { size: 15, b: 1, c: C.red, ans: true });
      s += FIG.line(x, 176, 462, 176, { c: C.edge, w: 1.4 });
      s += FIG.t(x, 200, 'n = W/M  →  PV = (W/M)RT', { size: 15 });
      s += FIG.t(x, 224, 'W : 질량  ·  M : 분자량', { size: 13, c: C.sub });
      return FIG.svg(480, 252, s);
    });

  add('p1-real-gas', 'p1c1', 23, '실제기체 상태방정식',
    ['실제기체 상태방정식', '이상기체의 성질', '실제기체상태의 방정식'],
    '이상기체는 분자 크기와 인력을 무시한 가상의 기체 — 실제기체는 b(자기 부피)와 a/V²(인력)를 보정한다',
    function () {
      var C = FIG.C, s = '';
      s += FIG.box(16, 22, 212, 182, { fill: '#fff', c: C.blue, r: 10 });
      s += FIG.box(252, 22, 212, 182, { fill: '#fff', c: C.orange, r: 10 });
      s += T(122, 44, '이상기체', { b: 1, c: C.blue }) + T(358, 44, '실제기체', { b: 1, c: C.orange });
      s += scatter(30, 62, 184, 92, 12, 2.6, C.blue, 33, 6);
      s += S(122, 162, '크기 · 인력 무시', { c: C.ink });
      s += T(122, 186, 'PV = RT', { size: 15, b: 1 });
      var m = [[290, 86], [326, 112], [366, 80], [404, 118], [300, 136], [356, 140], [430, 82]];
      s += FIG.line(326, 112, 366, 80, { c: C.orange, w: 1.4, dash: '3 3' }) + FIG.line(326, 112, 356, 140, { c: C.orange, w: 1.4, dash: '3 3' }) +
        FIG.line(366, 80, 404, 118, { c: C.orange, w: 1.4, dash: '3 3' });
      m.forEach(function (p) { s += FIG.circle(p[0], p[1], 10, { fill: C.orangeL, c: C.orange, w: 1.4 }); });
      s += FIG.line(341, 126, 304, 150, { c: C.sub, w: 1.2 }) + dot(341, 126, 3, C.sub) + T(304, 162, '인력 a/V²', { size: 13 });
      s += FIG.line(404, 128, 418, 150, { c: C.sub, w: 1.2 }) + dot(404, 128, 3, C.sub) + T(418, 162, '자기 부피 b', { size: 13 });
      s += T(358, 186, '(P + a/V²)(V − b) = RT', { size: 14, b: 1 });
      s += T(240, 230, '온도가 높고 압력이 낮을수록 → 이상기체에 가깝다', { size: 15, ans: true });
      return FIG.svg(480, 250, s);
    });

  add('p1-dalton', 'p1c1', 23, '돌턴의 분압법칙',
    ['돌턴의 분압법칙', '아메가의 분적법칙', '분압', '전압'],
    '돌턴 — 같은 부피에 섞으면 압력이 더해진다 / 아메가 — 같은 온도·압력이면 부피가 더해진다',
    function () {
      var C = FIG.C, s = '';
      s += FIG.t(16, 22, '① 돌턴의 분압법칙 — 부피가 같을 때', { size: 14, b: 1 });
      s += FIG.box(24, 38, 96, 78, { fill: '#fff', c: C.blue, r: 6 }) + scatter(30, 44, 84, 66, 6, 4, C.blue, 3, 4);
      s += T(150, 77, '+', { size: 24, b: 1, c: C.sub });
      s += FIG.box(180, 38, 96, 78, { fill: '#fff', c: C.orange, r: 6 }) + scatter(186, 44, 84, 66, 6, 4, C.orange, 8, 4);
      s += T(306, 77, '=', { size: 24, b: 1, c: C.sub });
      s += FIG.box(336, 38, 96, 78, { fill: '#fff', c: C.green, r: 6 }) + scatter(342, 44, 84, 66, 6, 4, C.blue, 3, 4) + scatter(342, 44, 84, 66, 6, 4, C.orange, 8, 4);
      s += T(72, 134, 'P₁', { b: 1, c: C.blue }) + T(228, 134, 'P₂', { b: 1, c: C.orange });
      s += T(384, 134, 'P = P₁ + P₂', { b: 1, c: C.green, ans: true });
      s += FIG.line(16, 154, 464, 154, { c: C.edge, w: 1.4 });
      s += FIG.t(16, 176, '② 아메가의 분적법칙 — 온도·압력이 같을 때', { size: 14, b: 1 });
      s += FIG.box(24, 198, 60, 60, { fill: '#fff', c: C.blue, r: 6 }) + scatter(28, 202, 52, 52, 4, 4, C.blue, 5, 4);
      s += T(110, 228, '+', { size: 24, b: 1, c: C.sub });
      s += FIG.box(136, 198, 84, 60, { fill: '#fff', c: C.orange, r: 6 }) + scatter(140, 202, 76, 52, 5, 4, C.orange, 12, 4);
      s += T(246, 228, '=', { size: 24, b: 1, c: C.sub });
      s += FIG.box(272, 198, 144, 60, { fill: '#fff', c: C.green, r: 6 }) + scatter(276, 202, 66, 52, 4, 4, C.blue, 5, 4) + scatter(346, 202, 66, 52, 5, 4, C.orange, 12, 4);
      s += T(54, 276, 'V₁', { b: 1, c: C.blue }) + T(178, 276, 'V₂', { b: 1, c: C.orange });
      s += T(344, 276, 'V = V₁ + V₂', { b: 1, c: C.green, ans: true });
      return FIG.svg(480, 294, s);
    });

  add('p1-graham', 'p1c1', 24, '혼합가스의 확산속도(그레이엄의 법칙)',
    ['혼합가스의 확산속도(그레이엄의 법칙)'],
    '그레이엄의 법칙 — 확산속도는 분자량의 제곱근에 반비례(수소·산소는 교재 원자량으로 계산한 예)',
    function () {
      var C = FIG.C, s = '';
      function vessel(y, name, M, col, seed) {
        return FIG.box(24, y, 116, 72, { fill: '#fff', c: col, r: 8 }) +
          rect(138, y + 28, 6, 16, '#fff') + scatter(30, y + 6, 100, 60, 7, 3.4, col, seed, 4) +
          T(82, y - 12, name + '  M = ' + M, { size: 14, b: 1, c: col });
      }
      s += vessel(40, '수소 H₂', 2, C.blue, 4) + vessel(150, '산소 O₂', 32, C.orange, 9);
      s += FIG.arrow(150, 76, 358, 76, { c: C.blue, w: 3, head: 13, flow: true });
      s += FIG.arrow(150, 186, 202, 186, { c: C.orange, w: 3, head: 13 });
      s += FIG.t(366, 76, '4배 빠르다', { b: 1, c: C.blue, ans: true });
      s += FIG.t(212, 186, '1', { b: 1, c: C.orange });
      s += T(240, 238, 'U_B / U_A = √(M_A / M_B) = t_A / t_B', { size: 15, b: 1 });
      s += S(240, 260, '수소 : 산소 = √(32/2) : 1 = 4 : 1 → 가벼울수록 빨리 퍼진다');
      return FIG.svg(480, 276, s);
    });

  /* ═══════════ CHAPTER 02 연소와 폭발 (26–42쪽) ═══════════ */

  add('p1-fire-triangle', 'p1c2', 27, '연소의 3요소',
    ['연소의 3요소', '소화방법의 종류'],
    '연소의 3요소 — 셋 중 하나만 빼도 불은 꺼진다(소화의 원리)',
    function () {
      var C = FIG.C, s = '';
      var P = [[150, 64], [62, 214], [238, 214]];
      s += FIG.poly(P, { close: 1, fill: C.yellowL, c: C.orange, w: 2 });
      s += flame(150, 166, 30);
      var nm = ['가연물', '산소\n공급원', '점화원'], col = [C.orange, C.blue, C.red], fl = [C.orangeL, C.blueL, C.redL];
      P.forEach(function (p, i) { s += FIG.circle(p[0], p[1], 36, { fill: fl[i], c: col[i], w: 2, label: nm[i], lc: col[i], size: 15, ans: true }); });
      s += T(366, 30, '하나라도 빼면 꺼진다', { b: 1, size: 15 });
      var rows = [['제거 소화', '타는 물질을 없앤다', 0], ['질식 소화', '산소를 16[%] 이하로', 1], ['냉각 소화', '발화점 아래로 식힌다', 0], ['희석 소화', '농도를 연소 한계 아래로', 0]];
      rows.forEach(function (r, i) {
        var y = 50 + i * 54;
        s += FIG.box(276, y, 190, 48, { fill: '#fff', c: C.grayM, r: 8 });
        s += FIG.t(288, y + 14, r[0], { size: 15, b: 1, halo: false });
        s += FIG.t(288, y + 35, r[1], { size: 13, c: C.sub, ans: !!r[2], halo: false });
      });
      return FIG.svg(480, 274, s);
    });

  add('p1-combustion-forms', 'p1c2', 27, '연소의 형태',
    ['연소의 형태'],
    '연소의 형태 — 기체 · 액체 · 고체마다 타는 방식이 다르다',
    function () {
      var C = FIG.C, s = '';
      var cols = [
        { x: 14, w: 140, n: '기체', c: C.blue, f: C.blueL, it: [['확산연소', '공기 중으로 퍼지며', 96], ['예혼합연소', '미리 공기와 섞어서', 176]] },
        { x: 164, w: 140, n: '액체', c: C.green, f: C.greenL, it: [['증발연소', '표면의 증기가 탄다', 96]], ex: ['에테르 · 가솔린', '석유 · 알코올'] },
        { x: 314, w: 152, n: '고체', c: C.orange, f: C.orangeL, it: [['표면연소', '숯 · 목탄 · 코크스', 80], ['분해연소', '목재 · 석탄 · 종이', 136], ['증발연소', '유황 · 나프탈렌', 192], ['내부(자기)연소', '니트로화합물 등', 248]] }
      ];
      cols.forEach(function (k) {
        var cx = k.x + k.w / 2;
        s += FIG.box(k.x, 14, k.w, 270, { fill: '#fff', c: k.c, r: 10 });
        s += FIG.box(k.x, 14, k.w, 36, { fill: k.f, c: k.c, r: 10, label: k.n, lc: k.c });
        k.it.forEach(function (it) {
          s += T(cx, it[2], it[0], { size: 15, b: 1, c: k.c, ans: true });
          s += T(cx, it[2] + 20, it[1], { size: 13 });
        });
        if (k.ex) k.ex.forEach(function (e, j) { s += T(cx, 160 + j * 20, e, { size: 13, c: C.sub }); });
      });
      return FIG.svg(480, 298, s);
    });

  add('p1-flash-point', 'p1c2', 28, '연소에 관한 물성',
    ['연소에 관한 물성'],
    '인화점 · 연소점 · 발화점 — 불씨가 있어야 붙으면 인화점, 불씨 없이 스스로 붙으면 발화점',
    function () {
      var C = FIG.C, s = '';
      var xs = [120, 220, 380], nm = ['인화점', '연소점', '발화점'];
      s += FIG.arrow(30, 150, 456, 150, { c: C.sub, w: 1.6, head: 10 });
      s += FIG.t(456, 134, '온도 ↑', { size: 13, c: C.sub, a: 'e' });
      s += star(92, 62, 12, 5, 8, { fill: C.yellowL }) + flame(122, 62, 16);
      s += flame(220, 60, 20);
      s += flame(380, 58, 26, { fill: C.redL, c: C.red });
      xs.forEach(function (x, i) {
        s += FIG.line(x, 142, x, 158, { c: C.ink, w: 2 });
        s += T(x, 98, nm[i], { b: 1, ans: true });
      });
      s += FIG.arrow(126, 136, 214, 136, { c: C.orange, w: 1.4, head: 8, both: true });
      s += T(170, 123, '약 10[℃] 높다', { size: 13, c: C.orange, ans: true });
      var d = [['불씨를 대면 붙는', '최저 온도'], ['5초 이상', '계속 타는 온도'], ['불씨 없이 스스로', '타기 시작하는 최저 온도']];
      xs.forEach(function (x, i) { s += S(x, 180, d[i][0], { c: C.ink }) + S(x, 198, d[i][1]); });
      s += T(240, 238, '최소착화에너지 : 전기 스파크로 불붙이는 데 드는 최소 에너지', { size: 13 });
      return FIG.svg(480, 258, s);
    });

  add('p1-flammable-range', 'p1c2', 28, '연소범위(폭발범위, 연소한계, 폭발한계)',
    ['연소범위(폭발범위, 연소한계, 폭발한계)', '위험도'],
    '연소범위 — 너무 묽어도, 너무 진해도 타지 않는다(구간 길이는 예시)',
    function () {
      var C = FIG.C, s = '', L = 130, U = 300;
      s += T(240, 20, '공기 중 가연성 가스 농도[%]', { size: 14, b: 1 });
      s += rect(30, 38, L - 30, 36, C.grayL, { c: C.grayM }) + rect(L, 38, U - L, 36, C.orangeL, { c: C.orange, w: 2 }) + rect(U, 38, 450 - U, 36, C.grayL, { c: C.grayM });
      s += T(80, 56, '묽다', { size: 13, c: C.sub, halo: false }) + T((L + U) / 2, 56, '연소범위', { b: 1, c: C.orange, halo: false }) + T(375, 56, '진하다', { size: 13, c: C.sub, halo: false });
      s += FIG.line(L, 30, L, 82, { c: C.blue, w: 2 }) + FIG.line(U, 30, U, 82, { c: C.red, w: 2 });
      s += T(L, 96, '하한 L', { size: 15, b: 1, c: C.blue, ans: true }) + T(U, 96, '상한 U', { size: 15, b: 1, c: C.red, ans: true });
      s += FIG.t(30, 92, '0', { size: 13, c: C.sub, a: 'm' }) + FIG.t(450, 92, '100', { size: 13, c: C.sub, a: 'm' });
      var f = [['온도 ↑', '하한 ↓ · 상한 ↑ → 넓어진다'], ['압력 ↑', '하한 그대로 · 상한 ↑ → 넓어진다'], ['산소농도 ↑', '상한 ↑ → 넓어진다']];
      f.forEach(function (r, i) {
        var y = 128 + i * 24;
        s += FIG.t(34, y, r[0], { size: 14, b: 1 }) + FIG.t(130, y, r[1], { size: 14, ans: true });
      });
      s += FIG.box(24, 200, 432, 56, { fill: C.yellowL, c: C.orange, r: 8 });
      s += T(240, 218, '위험도 H = (U − L)/L  — 클수록 위험', { size: 15, b: 1, halo: false });
      s += T(240, 241, '계산 예) 수소 (4~75[%]) : H = (75 − 4)/4 ≒ 17.8', { size: 13, c: C.sub, halo: false });
      return FIG.svg(480, 270, s);
    });

  add('p1-detonation', 'p1c2', 29, '폭발의 종류',
    ['폭발의 종류', '폭굉 유도거리'],
    '폭연과 폭굉 — 충격파가 음속보다 느리면 폭연, 빠르면 폭굉(속도 눈금은 10배씩 줄여 그림)',
    function () {
      var C = FIG.C, s = '';
      function X(v) { return 40 + (Math.log(v) / Math.LN10 + 1) * 87; }
      s += FIG.line(X(340), 30, X(340), 118, { c: C.sub, w: 1.4, dash: '5 4' });
      s += T(X(340), 22, '음속', { size: 13, c: C.sub, b: 1 });
      s += rect(X(0.1), 44, X(10) - X(0.1), 22, C.orangeL, { c: C.orange, r: 4 });
      s += FIG.t(X(0.1), 80, '폭연(deflagration)', { size: 14, b: 1, c: C.orange, ans: true });
      s += FIG.t(X(10) + 8, 55, '0.1~10[m/s]', { size: 13, ans: true });
      s += rect(X(1000), 92, X(3500) - X(1000), 22, C.redL, { c: C.red, r: 4 });
      s += FIG.t(X(1000) - 8, 92, '폭굉(detonation)', { size: 14, b: 1, c: C.red, a: 'e', ans: true });
      s += FIG.t(X(1000) - 8, 112, '1,000~3,500[m/s]', { size: 13, a: 'e', ans: true });
      s += T(240, 142, '음속보다 느리면 폭연 · 빠르면 폭굉', { size: 14 });
      s += FIG.line(20, 160, 460, 160, { c: C.edge, w: 1.2 });
      s += rect(40, 182, 400, 30, C.grayL, { c: C.ink, w: 1.8 });
      s += star(56, 197, 10, 4, 8, { fill: C.yellowL });
      [110, 170, 230, 290].forEach(function (x, i) { s += flame(x, 199, 7 + i * 2); });
      s += rect(334, 183, 10, 28, C.red);
      s += FIG.arrow(352, 197, 420, 197, { c: C.red, w: 2.4, head: 10 });
      s += FIG.arrow(56, 228, 334, 228, { c: C.ink, w: 1.4, head: 8, both: true });
      s += T(195, 242, '폭굉 유도거리', { size: 14, b: 1, ans: true });
      s += S(56, 174, '점화', { c: C.ink }) + S(339, 174, '폭굉', { c: C.red, b: 1 });
      s += T(240, 268, '짧아진다 : 관 지름이 작을수록 · 압력이 높을수록', { size: 13 });
      return FIG.svg(480, 286, s);
    });

  add('p1-safety-gap', 'p1c2', 30, '용기의 크기와 형태',
    ['용기의 크기와 형태'],
    '안전 간극 — 표준 용기 안에서 폭발시켜도 불이 틈새 밖으로 번지지 않는 틈새의 최댓값',
    function () {
      var C = FIG.C, s = '';
      s += FIG.box(30, 40, 170, 110, { fill: C.orangeL, c: C.ink, r: 4, w: 2 });
      s += T(115, 66, '표준 용기', { size: 14, halo: false }) + T(115, 88, '내용적 8[L]', { b: 1, ans: true });
      s += star(90, 122, 12, 5, 8, { fill: C.yellowL }) + flame(130, 126, 14);
      s += rect(200, 40, 90, 47, C.grayM, { c: C.ink, w: 1.8 }) + rect(200, 97, 90, 53, C.grayM, { c: C.ink, w: 1.8 });
      s += FIG.arrow(204, 30, 286, 30, { c: C.ink, w: 1, head: 7, both: true });
      s += T(245, 18, '틈새길이 25[mm]', { size: 13, b: 1, ans: true });
      s += FIG.arrow(184, 92, 330, 92, { c: C.orange, w: 1.6, head: 9, dash: '4 3' });
      s += T(395, 82, '바깥', { size: 13, c: C.sub }) + T(395, 100, '폭발성 혼합가스', { size: 13, c: C.sub });
      s += T(240, 176, '불이 밖으로 번지지 않는 틈새의 최댓값 = 안전 간극', { size: 14, b: 1 });
      s += FIG.line(20, 194, 460, 194, { c: C.edge, w: 1.2 });
      var g = [['1등급', '0.6[mm] 초과', 'LPG · CO · NH₃ · 벤젠 · 아세톤'], ['2등급', '0.4~0.6[mm]', '에틸렌 · 석탄가스'], ['3등급', '0.4[mm] 이하', '수소·아세틸렌·이황화탄소·수성가스']];
      g.forEach(function (r, i) {
        var y = 214 + i * 24;
        s += FIG.t(24, y, r[0], { size: 14, b: 1 }) + FIG.t(80, y, r[1], { size: 14, b: 1, c: C.orange, ans: true }) + FIG.t(196, y, r[2], { size: 13 });
      });
      return FIG.svg(480, 290, s);
    });

  add('p1-explosion-proof', 'p1c2', 31, '전기 방폭구조의 종류',
    ['전기 방폭구조의 종류', '전기 방폭구조'],
    '전기 방폭구조 6가지와 기호 — 전기 불꽃이 바깥 가스에 불을 붙이지 못하게',
    function () {
      var C = FIG.C, s = '';
      var k = [['d', '내압 방폭구조', '폭발해도', '용기가 견딘다'], ['o', '유입 방폭구조', '불꽃 나는 부분을', '기름 속에'], ['p', '압력 방폭구조', '공기·불활성기체를', '불어넣어 막는다'],
        ['e', '안전증 방폭구조', '안전 조치를 더해', '안전도를 높임'], ['ia · ib', '본질안전 방폭구조', '불꽃이 나도', '불이 붙지 않음'], ['s', '특수 방폭구조', '사입 · 밀폐 등', '시험으로 확인']];
      k.forEach(function (r, i) {
        var x = 12 + (i % 3) * 154, y = 14 + Math.floor(i / 3) * 138, cx = x + 74;
        s += FIG.box(x, y, 148, 130, { fill: '#fff', c: C.blue, r: 10 });
        s += T(cx, y + 32, r[0], { size: 26, b: 1, c: C.blue, ans: true });
        s += T(cx, y + 68, r[1], { size: 14, b: 1 });
        s += S(cx, y + 92, r[2], { c: C.ink }) + S(cx, y + 110, r[3], { c: C.ink });
      });
      return FIG.svg(480, 296, s);
    });

  add('p1-hazard-zone', 'p1c2', 31, '위험 장소',
    ['위험 장소'],
    '위험 장소 — 가스가 폭발하한 이상이 되는 일이 늘 있으면 0종, 종종이면 1종, 사고 때만이면 2종(배치는 예시)',
    function () {
      var C = FIG.C, s = '';
      s += FIG.box(16, 24, 256, 252, { fill: C.yellowL, c: C.orange, r: 14, w: 1.4 });
      s += FIG.circle(144, 88, 50, { fill: C.orangeL, c: C.orange, w: 1.6 });
      s += FIG.box(84, 120, 120, 130, { fill: C.redL, c: C.red, r: 10, w: 2 });
      s += FIG.line(144, 120, 144, 66, { c: C.ink, w: 3 }) + FIG.line(132, 66, 156, 66, { c: C.ink, w: 3 });
      s += T(144, 186, '0종', { size: 20, b: 1, c: C.red, ans: true });
      s += T(184, 78, '1종', { size: 18, b: 1, c: C.orange, ans: true });
      s += T(54, 254, '2종', { size: 18, b: 1, c: C.orange, ans: true });
      s += S(144, 210, '설비 안', { c: C.ink, halo: false });
      var L = [['0종 장소', C.red, '상용 상태에서 계속', '폭발하한 이상'], ['1종 장소', C.orange, '상용 · 정비 · 누출로', '종종 체류'], ['2종 장소', C.orange, '사고 · 오조작 · 환기 고장', '때에만 위험']];
      L.forEach(function (r, i) {
        var y = 54 + i * 82;
        s += FIG.t(290, y, r[0], { size: 15, b: 1, c: r[1], ans: true });
        s += FIG.t(290, y + 22, r[2], { size: 13 }) + FIG.t(290, y + 40, r[3], { size: 13 });
      });
      return FIG.svg(480, 292, s);
    });

  add('p1-fire-class', 'p1c2', 32, '화재의 종류',
    ['화재의 종류'],
    '화재의 종류 — A 일반 · B 유류·가스 · C 전기 · D 금속',
    function () {
      var C = FIG.C, s = '';
      var k = [['A급', '일반화재', '백색', '종이 · 목재', '섬유류', C.sub, ['물 · 수용액']], ['B급', '유류 · 가스', '황색', '유류', '가스', C.orange, ['포말 · 분말', '할론 · CO₂']],
        ['C급', '전기화재', '청색', '누전 · 합선', '정전기 불꽃', C.blue, ['CO₂ · 분말']], ['D급', '금속화재', '', '마그네슘', '알루미늄 분말', C.ink, ['건조사']]];
      k.forEach(function (r, i) {
        var x = 14 + i * 114, cx = x + 54;
        s += FIG.box(x, 18, 108, 222, { fill: '#fff', c: r[5], r: 10, w: 2 });
        s += T(cx, 46, r[0], { size: 24, b: 1, c: r[5] });
        s += T(cx, 78, r[1], { size: 15, b: 1, ans: true });
        if (r[2]) s += T(cx, 104, r[2], { size: 15, b: 1, c: r[5], ans: true });
        s += S(cx, 134, r[3], { c: C.ink }) + S(cx, 152, r[4], { c: C.ink });
        s += FIG.line(x + 14, 170, x + 94, 170, { c: C.edge, w: 1.2 });
        s += S(cx, 184, '소화재');
        r[6].forEach(function (z, j) { s += T(cx, 206 + j * 18, z, { size: 13, b: 1, ans: i === 3 }); });
      });
      return FIG.svg(480, 254, s);
    });

  /* ── 4. 기초 열역학 (33–42쪽) ── */

  add('p1-torricelli', 'p1c2', 33, '압력(Pressure)',
    ['압력(Pressure)'],
    '표준 대기압 — 수은 기둥 760[mm], 물 기둥 10.33[m]를 밀어 올리는 압력(기둥 길이 비율은 줄여 그림)',
    function () {
      var C = FIG.C, s = '';
      function column(x, top, fillTop, fill, name, hv) {
        var o = '';
        o += rect(x - 38, 238, 100, 30, fill, { c: C.ink, w: 1.6, r: 3 });
        o += rect(x, 40, 24, 212, '#fff', { c: C.ink, w: 1.8 });
        o += rect(x + 1, fillTop, 22, 250 - fillTop, fill);
        o += FIG.arrow(x + 38, fillTop, x + 38, 238, { c: C.ink, w: 1, head: 7, both: true });
        o += FIG.t(x + 46, 150, hv, { size: 15, b: 1, ans: true });
        o += T(x + 12, 284, name, { size: 14, b: 1 });
        return o;
      }
      s += column(56, 40, 76, C.grayM, '수은(Hg)', '760[mm]');
      s += FIG.t(86, 56, '진공', { size: 13, c: C.sub });
      s += column(176, 40, 76, C.blueL, '물(H₂O)', '10.33[m]');
      s += FIG.box(300, 18, 168, 222, { fill: C.yellowL, c: C.orange, r: 10 });
      s += T(384, 38, '1[atm] =', { b: 1, halo: false });
      ['760[mmHg]', '1.0332[kgf/cm²]', '10.33[mH₂O]', '1.01325[bar]', '101.325[kPa]', '14.7[lb/in²]'].forEach(function (v, i) {
        s += T(384, 66 + i * 28, v, { size: 14, b: i < 2, ans: true, halo: false });
      });
      s += T(384, 262, 'P = F/A', { b: 1 }) + S(384, 282, '단위면적당 누르는 힘');
      return FIG.svg(480, 300, s);
    });

  add('p1-abs-pressure', 'p1c2', 35, '절대압력',
    ['절대압력', '압력(Pressure)'],
    '절대압력 — 완전 진공을 0으로 잰 압력. 게이지 압력은 대기압을 0으로 잰 압력',
    function () {
      var C = FIG.C, s = '', yA = 60, yAtm = 150, yB = 205, y0 = 250;
      s += FIG.line(24, yAtm, 290, yAtm, { c: C.blue, w: 2 });
      s += FIG.line(24, y0, 290, y0, { c: C.ink, w: 2.4 });
      s += FIG.line(24, yA, 290, yA, { c: C.sub, w: 1.2, dash: '4 3' }) + FIG.line(24, yB, 290, yB, { c: C.sub, w: 1.2, dash: '4 3' });
      s += FIG.t(290, yAtm - 10, '대기압', { size: 14, b: 1, c: C.blue, a: 'e' });
      s += FIG.t(290, y0 + 14, '완전 진공', { size: 14, b: 1, a: 'e' });
      s += FIG.t(24, yA - 12, 'A : 대기압 위', { size: 13, c: C.sub }) + FIG.t(72, yB + 14, 'B : 대기압 아래', { size: 13, c: C.sub });
      s += FIG.arrow(60, y0, 60, yA + 2, { c: C.red, w: 2.2, head: 10 }) + FIG.t(68, 112, '절대압력', { size: 15, b: 1, c: C.red, ans: true });
      s += FIG.arrow(150, yAtm, 150, yA + 2, { c: C.orange, w: 2.2, head: 10 }) + FIG.t(158, 104, '게이지 압력', { size: 15, b: 1, c: C.orange, ans: true });
      s += FIG.arrow(150, yAtm, 150, yB - 2, { c: C.purple, w: 2.2, head: 10 }) + FIG.t(158, 178, '진공압력', { size: 15, b: 1, c: C.purple, ans: true });
      s += FIG.arrow(266, y0, 266, yB + 2, { c: C.red, w: 2.2, head: 10 }) + FIG.t(258, 228, '절대압력', { size: 15, b: 1, c: C.red, a: 'e', ans: true });
      s += FIG.box(304, 30, 166, 230, { fill: C.yellowL, c: C.orange, r: 10 });
      s += FIG.t(314, 54, '절대압력', { size: 15, b: 1, c: C.red, ans: true });
      s += FIG.t(314, 78, '= 대기압 + 게이지', { size: 14, ans: true });
      s += FIG.t(314, 100, '= 대기압 − 진공', { size: 14, ans: true });
      s += FIG.t(314, 138, '게이지 압력', { size: 15, b: 1, c: C.orange, ans: true });
      s += FIG.t(314, 162, '= 절대 − 대기압', { size: 14, ans: true });
      s += FIG.t(314, 200, '1[MPa] ≒ 10[kgf/cm²]', { size: 13, b: 1 });
      s += FIG.t(314, 222, '절대는 (a), 게이지는 (g)', { size: 13, c: C.sub });
      return FIG.svg(480, 288, s);
    });

  add('p1-temp-scales', 'p1c2', 35, '온도(Temperature)',
    ['온도(Temperature)'],
    '온도 눈금 네 가지 — 섭씨는 100등분, 화씨는 180등분, 절대온도는 −273[℃]에서 0(화씨·랭킨 값은 교재 식으로 계산)',
    function () {
      var C = FIG.C, s = '', yB = 70, yF = 150, yZ = 250;
      var sc = [[110, '섭씨[℃]', ['100', '0', '−273'], C.blue], [210, '화씨[℉]', ['212', '32', '−460'], C.orange], [310, '켈빈[K]', ['373', '273', '0'], C.green], [410, '랭킨[R]', ['672', '492', '0'], C.purple]];
      [[yB, '비점'], [yF, '빙점'], [yZ, '절대 0']].forEach(function (l) {
        s += FIG.line(64, l[0], 466, l[0], { c: C.edge, w: 1.2, dash: '4 3' });
        s += FIG.t(16, l[0], l[1], { size: 13, b: 1, c: C.sub });
      });
      var ansMap = { '0|0': 0, '0|2': 1, '1|0': 1, '1|1': 1, '2|1': 1 };
      sc.forEach(function (k, i) {
        var x = k[0];
        s += T(x, 34, k[1], { size: 15, b: 1, c: k[3] });
        s += FIG.line(x, 52, x, 262, { c: k[3], w: 3 });
        [yB, yF, yZ].forEach(function (y, j) {
          s += FIG.line(x - 6, y, x + 6, y, { c: k[3], w: 2 });
          s += FIG.t(x + 10, y, k[2][j], { size: 15, b: 1, ans: !!ansMap[i + '|' + j] });
        });
      });
      s += FIG.t(102, 110, '100등분', { size: 13, c: C.sub, a: 'e', ans: true }) + FIG.t(202, 110, '180등분', { size: 13, c: C.sub, a: 'e', ans: true });
      s += T(240, 290, 'K = 273 + ℃   ·   R = 460 + ℉   ·   ℃ = 5/9 × (℉ − 32)', { size: 14, b: 1 });
      return FIG.svg(480, 310, s);
    });

  add('p1-water-heat', 'p1c2', 37, '현열과 잠열 및 열용량',
    ['현열과 잠열 및 열용량', '비열(Specific heat)'],
    '물 1[kg]을 0[℃] 얼음에서 100[℃] 수증기까지 — 온도가 그대로인 구간이 잠열(가로 길이는 열량에 비례)',
    function () {
      var C = FIG.C, s = '', x0 = 70, k = 0.5, y0 = 220, y1 = 90;
      var a = x0 + 79.68 * k, b = a + 100 * k, c = b + 539 * k;
      s += axes(x0 - 10, 250, 380, 220, '열량', '온도');
      s += FIG.line(x0 - 14, y0, x0 - 6, y0, { c: C.sub, w: 1.2 }) + FIG.line(x0 - 14, y1, x0 - 6, y1, { c: C.sub, w: 1.2 });
      s += FIG.t(x0 - 18, y0, '0[℃]', { size: 13, a: 'e', c: C.sub }) + FIG.t(x0 - 18, y1, '100[℃]', { size: 13, a: 'e', c: C.sub });
      s += FIG.line(x0, y0, a, y0, { c: C.blue, w: 4 }) + FIG.line(a, y0, b, y1, { c: C.orange, w: 4 }) + FIG.line(b, y1, c, y1, { c: C.red, w: 4 });
      s += T((x0 + a) / 2, y0 - 18, '융해잠열', { size: 13, b: 1, c: C.blue }) + T((x0 + a) / 2 + 10, y0 + 18, '79.68[kcal]', { size: 13, b: 1, ans: true });
      s += FIG.t(b + 10, 168, '현열(감열)', { size: 13, b: 1, c: C.orange }) + FIG.t(b + 10, 188, '100[kcal]', { size: 13, b: 1, ans: true });
      s += T((b + c) / 2, y1 - 18, '증발잠열', { size: 14, b: 1, c: C.red }) + T((b + c) / 2, y1 + 20, '539[kcal]', { size: 15, b: 1, ans: true });
      s += S((b + c) / 2, y1 + 42, '100[℃] 물 → 100[℃] 수증기');
      s += T(240, 276, '현열 Q = G·C·ΔT   ·   잠열 Q = G·r', { size: 15, b: 1 });
      s += S(240, 298, '비열 C : 물 1 · 얼음 0.5 · 공기 0.24 · 수증기 0.46 [kcal/kg·℃]', { c: C.ink });
      return FIG.svg(480, 314, s);
    });

  add('p1-thermo-laws', 'p1c2', 41, '열역학 제0법칙(열평형 법칙)',
    ['열역학 제0법칙(열평형 법칙)', '열역학 제1법칙(에너지 보존의 법칙)', '열역학 제2법칙(에너지 흐름의 법칙 = 실제적 법칙)', '열역학 제3법칙(네른스트의 열정리)'],
    '열역학 법칙 네 가지 — 0 열평형 · 1 에너지 보존 · 2 에너지 흐름 · 3 절대 0도 불가',
    function () {
      var C = FIG.C, s = '';
      var P = [[12, 12, '제0법칙', '열평형'], [242, 12, '제1법칙', '에너지 보존'], [12, 156, '제2법칙', '에너지 흐름'], [242, 156, '제3법칙', '네른스트']];
      P.forEach(function (p) {
        s += FIG.box(p[0], p[1], 226, 138, { fill: '#fff', c: C.grayM, r: 10 });
        s += FIG.t(p[0] + 12, p[1] + 20, p[2], { size: 15, b: 1, c: C.blue, ans: true }) + FIG.t(p[0] + 86, p[1] + 20, p[3], { size: 15, b: 1 });
      });
      /* 0 */
      s += FIG.box(30, 44, 60, 32, { fill: C.orangeL, c: C.orange, label: '고온', size: 14 }) + FIG.box(30, 80, 60, 32, { fill: C.blueL, c: C.blue, label: '저온', size: 14 });
      s += FIG.arrow(98, 78, 142, 78, { c: C.ink, w: 1.8, head: 9 });
      s += FIG.box(150, 44, 70, 32, { fill: C.greenL, c: C.green, label: '같은 온도', size: 13 }) + FIG.box(150, 80, 70, 32, { fill: C.greenL, c: C.green, label: '같은 온도', size: 13 });
      s += T(120, 134, '접촉하면 온도가 같아진다', { size: 13, c: C.sub });
      /* 1 */
      s += FIG.box(260, 50, 70, 40, { fill: C.blueL, c: C.blue, label: '일 W' }) + FIG.box(382, 50, 70, 40, { fill: C.orangeL, c: C.orange, label: '열 Q' });
      s += FIG.arrow(334, 62, 378, 62, { c: C.ink, w: 1.6, head: 8 }) + FIG.arrow(378, 80, 334, 80, { c: C.ink, w: 1.6, head: 8 });
      s += T(355, 110, 'Q = AW · W = JQ', { size: 15, b: 1, ans: true });
      s += T(355, 132, 'J = 427[kg·m/kcal]', { size: 13, c: C.sub });
      /* 2 */
      s += FIG.box(26, 190, 62, 28, { fill: C.orangeL, c: C.orange, label: '고온체', size: 13 });
      s += FIG.arrow(88, 204, 110, 204, { c: C.ink, w: 1.6, head: 8 });
      s += FIG.circle(130, 204, 18, { fill: C.grayL, c: C.ink, label: '기관', size: 13 });
      s += FIG.arrow(148, 204, 196, 204, { c: C.blue, w: 2, head: 9 }) + FIG.t(202, 204, '일', { size: 14, b: 1, c: C.blue });
      s += FIG.arrow(130, 222, 130, 242, { c: C.ink, w: 1.6, head: 8 });
      s += FIG.box(99, 244, 62, 24, { fill: C.blueL, c: C.blue, label: '저온체', size: 13 });
      s += T(125, 282, '효율 100[%] 기관은 없다', { size: 13, b: 1, ans: true });
      /* 3 */
      s += FIG.line(282, 188, 282, 268, { c: C.blue, w: 3 });
      [196, 216, 236, 256].forEach(function (y) { s += FIG.line(276, y, 288, y, { c: C.blue, w: 1.6 }); });
      s += FIG.line(270, 272, 294, 286, { c: C.red, w: 2.4 }) + FIG.line(294, 272, 270, 286, { c: C.red, w: 2.4 });
      s += FIG.t(306, 198, '절대 0°', { size: 15, b: 1 });
      s += FIG.t(306, 228, '(−273[℃])', { size: 15, b: 1, c: C.red, ans: true });
      s += FIG.t(306, 256, '에는 도달할 수 없다', { size: 13 });
      return FIG.svg(480, 306, s);
    });

  /* ═══════════ CHAPTER 03 가스의 성질 (43–57쪽) ═══════════ */

  add('p1-mw-air', 'p1c2', 40, '열역학 용어정리(밀도, 비중, 비체적, 원자와 분자)',
    ['열역학 용어정리(밀도, 비중, 비체적, 원자와 분자)', '가스밀도, 비체적 비중', 'L.P.G(액화석유가스, Liquefied Petroleum Gas)', '메탄(Methane : CH₄)'],
    '가스 비중 = 분자량/29 — 29(공기)보다 가벼우면 위로 퍼지고 무거우면 바닥에 고인다(분자량은 교재 원자량 C 12 · H 1 · N 14 · O 16 으로 계산)',
    function () {
      var C = FIG.C, s = '', yb = 230;
      function Y(m) { return yb - m * 3; }
      var g = [['H₂', 2], ['CH₄', 16], ['NH₃', 17], ['C₂H₂', 26], ['CO', 28], ['N₂', 28], ['O₂', 32], ['CO₂', 44], ['C₃H₈', 44], ['C₄H₁₀', 58]];
      s += T(240, 22, '비중 = 분자량 / 29', { size: 15, b: 1 });
      g.forEach(function (r, i) {
        var x = 66 + i * 40, heavy = r[1] > 29;
        s += rect(x, Y(r[1]), 30, yb - Y(r[1]), heavy ? C.orangeL : C.blueL, { c: heavy ? C.orange : C.blue, r: 3 });
        s += T(x + 15, Y(r[1]) - 10, String(r[1]), { size: 13, b: 1, c: heavy ? C.orange : C.blue });
        s += T(x + 15, yb + 16, r[0], { size: 13, b: 1 });
      });
      s += FIG.line(68, Y(29), 466, Y(29), { c: C.red, w: 2, dash: '6 4' });
      s += FIG.t(62, Y(29), '공기 29', { size: 13, b: 1, c: C.red, a: 'e', ans: true });
      s += FIG.line(68, yb, 466, yb, { c: C.ink, w: 1.6 });
      s += T(240, 270, '가벼움(위로 퍼짐) : H₂ · CH₄ · NH₃   ·   무거움(바닥에 고임) : LPG', { size: 13 });
      return FIG.svg(480, 290, s);
    });

  add('p1-h2-electrolysis', 'p1c3', 43, '수소(Hydrogen : H₂)',
    ['수소(Hydrogen : H₂)'],
    '물의 전기분해 — 음극에서 수소, 양극에서 산소가 2 : 1 로 나온다',
    function () {
      var C = FIG.C, s = '';
      s += rect(30, 150, 220, 100, C.blueL, { c: C.ink, w: 2, r: 4 });
      [[90, 142], [190, 102]].forEach(function (t) {
        s += rect(t[0] - 20, 60, 40, 150, C.blueL, { c: C.ink, w: 1.8, r: 3 });
        s += rect(t[0] - 19, 61, 38, t[1] - 61, '#fff');
        s += FIG.line(t[0] - 19, t[1], t[0] + 19, t[1], { c: C.blue, w: 1.4 });
        s += rect(t[0] - 5, 188, 10, 40, C.ink);
      });
      s += T(90, 100, 'H₂', { b: 1, size: 17, ans: true }) + T(190, 80, 'O₂', { b: 1, size: 17, ans: true });
      s += T(90, 44, '음극(−)', { size: 14, b: 1, c: C.blue }) + T(190, 44, '양극(+)', { size: 14, b: 1, c: C.red });
      s += T(140, 92, '2 : 1', { size: 17, b: 1, c: C.orange, ans: true });
      s += T(140, 240, 'NaOH 20[%]', { size: 13, halo: false });
      s += FIG.poly([[90, 228], [90, 270], [130, 270]], { c: C.ink, w: 1.6 }) + FIG.poly([[150, 270], [190, 270], [190, 228]], { c: C.ink, w: 1.6 });
      s += FIG.line(132, 264, 132, 276, { c: C.ink, w: 4 }) + FIG.line(146, 258, 146, 282, { c: C.ink, w: 2.4 });
      s += FIG.t(162, 284, '직류 2[V]', { size: 13, c: C.sub });
      var f = [['폭발범위', '공기 4~75[%] · 산소 4~94[%]'], ['수소취성(탈탄)', '막는 원소 W · V · Mo · Ti · Cr'], ['가장 가볍고 빠르다', '확산속도 최대 · 비중 최소'], ['비점', '−252.9[℃]']];
      f.forEach(function (r, i) {
        var y = 52 + i * 58;
        s += FIG.t(272, y, r[0], { size: 14, b: 1 }) + FIG.t(272, y + 21, r[1], { size: 13, ans: true });
      });
      return FIG.svg(480, 298, s);
    });

  add('p1-acetylene', 'p1c3', 46, '아세틸렌(Acetylene : C₂H₂)',
    ['아세틸렌(Acetylene : C₂H₂)', '다공도'],
    '아세틸렌 용기 — 다공물질에 스며든 아세톤 · DMF 에 녹여 저장(용해가스). 폭발은 세 가지',
    function () {
      var C = FIG.C, s = '', cx = 70, top = 56, w = 84, h = 190;
      s += cyl(cx, top, w, h, { fill: '#fff' });
      s += rect(cx - 40, top + 26, 80, h - 30, C.grayL, { r: 6 });
      for (var gx = cx - 32; gx <= cx + 32; gx += 12) for (var gy = top + 36; gy <= top + h - 10; gy += 12)
        s += '<circle cx="' + gx + '" cy="' + gy + '" r="4.2" fill="none" stroke="' + C.line + '" stroke-width="1.2"/>';
      s += scatter(cx - 34, top + 30, 68, h - 40, 16, 2.6, C.orange, 6);
      s += cylOutline(cx, top, w, h);
      s += FIG.callout(cx + 20, 110, 138, 96, '', { c: C.sub });
      s += FIG.t(142, 90, '다공물질', { size: 14, b: 1, ans: true }) + FIG.t(142, 108, '목탄 · 규조토 등', { size: 13, c: C.sub });
      s += FIG.line(cx + 26, 180, 138, 170, { c: C.sub, w: 1 });
      s += FIG.t(142, 164, '용제', { size: 14, b: 1 }) + FIG.t(142, 182, '아세톤 · DMF', { size: 13, ans: true });
      var b = [['산화폭발', '산소와 타며 3,000[℃] 이상'], ['분해폭발', '흡열 화합물 — 압축하면 분해'], ['화합폭발', 'Cu · Hg · Ag 와 아세틸라이드']];
      b.forEach(function (r, i) {
        var y = 26 + i * 80;
        s += FIG.box(262, y, 206, 70, { fill: C.orangeL, c: C.orange, r: 8 });
        s += T(365, y + 22, r[0], { size: 15, b: 1, c: C.orange, ans: true, halo: false });
        s += T(365, y + 47, r[1], { size: 13, halo: false });
      });
      s += T(130, 278, '폭발범위 2.5~81[%]', { size: 14, b: 1, ans: true });
      s += T(360, 278, '아세톤 · DMF 에 25배 녹는다', { size: 13, ans: true });
      return FIG.svg(480, 296, s);
    });

  add('p1-lpg', 'p1c3', 52, 'L.P.G(액화석유가스, Liquefied Petroleum Gas)',
    ['L.P.G(액화석유가스, Liquefied Petroleum Gas)', '액화석유가스(LPG)'],
    'LPG(프로판 · 부탄) — 공기보다 무거워 새면 바닥에 고인다',
    function () {
      var C = FIG.C, s = '';
      s += FIG.box(14, 28, 206, 206, { fill: '#fff', c: C.ink, r: 4, w: 1.6 });
      s += FIG.path('M15,204 q20,-8 40,0 t40,0 t40,0 t40,0 t44,0 L219,233 L15,233 Z', { fill: C.orangeL, c: C.orange, w: 1.4 });
      s += cyl(60, 128, 48, 96, { fill: C.grayL });
      s += FIG.arrow(72, 112, 118, 150, { c: C.orange, w: 1.6, head: 8, dash: '4 3' });
      s += FIG.arrow(130, 160, 160, 196, { c: C.orange, w: 1.6, head: 8, dash: '4 3' });
      s += T(117, 52, '새면 바닥에 고인다', { size: 14, b: 1 });
      s += T(117, 74, '프로판 비중 1.5', { size: 13, ans: true }) + T(117, 97, '부탄 비중 2', { size: 13, ans: true });
      s += T(150, 220, 'LPG', { size: 14, b: 1, c: C.orange, halo: false });
      var f = [['기화하면 부피가', '프로판 약 250배 · 부탄 약 230배'], ['폭발범위가 좁다', '프로판 2.1~9.5 · 부탄 1.8~8.4[%]'], ['무색 · 무취 → 부취제', '메르캅탄, 공기 중 1/1,000'], ['발열량이 크다', '12,000[kcal/kg] · 용기 40[℃] 이하']];
      f.forEach(function (r, i) {
        var y = 28 + i * 52;
        s += FIG.box(232, y, 236, 46, { fill: '#fff', c: C.grayM, r: 8 });
        s += FIG.t(242, y + 15, r[0], { size: 14, b: 1 }) + FIG.t(242, y + 34, r[1], { size: 13, ans: true });
      });
      s += T(240, 262, 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O  (프로판은 공기 약 25배 필요)', { size: 13 });
      return FIG.svg(480, 282, s);
    });

  /* ═══════════ 시험 직전 공식정리 · 요점정리 (250–269쪽) ═══════════ */

  add('p1-flam-bars', 'yo', 257, '주요 가연성 가스의 폭발범위',
    ['주요 가연성 가스의 폭발범위', '연소범위(폭발범위, 연소한계, 폭발한계)', '위험도'],
    '주요 가연성 가스의 공기 중 폭발범위 — 막대가 길수록(범위가 넓을수록) 위험',
    function () {
      var C = FIG.C, s = '', x0 = 112, k = 3.36;
      function X(p) { return x0 + p * k; }
      var g = [['아세틸렌', 2.5, 81], ['산화에틸렌', 3, 80], ['수소', 4, 75], ['일산화탄소', 12.5, 74], ['이황화탄소', 1.25, 44], ['시안화수소', 6, 41], ['에틸렌', 2.7, 36], ['암모니아', 15, 28], ['메탄', 5, 15], ['프로판', 2.1, 9.5], ['부탄', 1.8, 8.4]];
      s += T(240, 20, '공기 중 폭발범위 [%]', { size: 15, b: 1 });
      [0, 20, 40, 60, 80, 100].forEach(function (p) {
        s += FIG.line(X(p), 36, X(p), 282, { c: C.edge, w: 1 });
        s += T(X(p), 296, p === 100 ? '100[%]' : String(p), { size: 13, c: C.sub });
      });
      g.forEach(function (r, i) {
        var y = 46 + i * 22;
        s += FIG.t(x0 - 8, y, r[0], { size: 14, b: 1, a: 'e' });
        s += rect(X(r[1]), y - 7, Math.max(3, X(r[2]) - X(r[1])), 14, C.orangeL, { c: C.orange, r: 3 });
        s += FIG.t(X(r[2]) + 6, y, r[1] + '~' + r[2], { size: 13, ans: true });
      });
      return FIG.svg(480, 310, s);
    });

  add('p1-toxic-ppm', 'yo', 257, '주요 독성가스의 허용농도',
    ['주요 독성가스의 허용농도', '독성에 의한 분류'],
    '주요 독성가스의 허용농도[ppm] — 숫자가 작을수록 더 독하다',
    function () {
      var C = FIG.C, s = '';
      var g = [['0.1', '포스겐 · 오존 · 불소 · 브롬'], ['0.3', '인화수소'], ['1', '염소'], ['3', '불화수소'], ['5', '염화수소 · 아황산가스'], ['10', '황화수소 · 시안화수소 · 벤젠'], ['20', '브롬화메탄'], ['25', '암모니아 · 일산화질소'], ['50', '산화에틸렌'], ['100', '염화메탄']];
      s += T(240, 20, '허용농도가 낮을수록 독하다', { size: 15, b: 1 });
      s += FIG.t(80, 42, '[ppm]', { size: 13, c: C.sub, a: 'e' });
      g.forEach(function (r, i) {
        var y = 62 + i * 22, v = parseFloat(r[0]), len = 14 + (Math.log(v) / Math.LN10 + 1) * 36;
        s += FIG.t(80, y, r[0], { size: 14, b: 1, a: 'e', ans: true });
        s += rect(90, y - 7, len, 14, C.purpleL, { c: C.purple, r: 3 });
        s += FIG.t(222, y, r[1], { size: 14 });
      });
      s += FIG.box(24, 280, 432, 30, { fill: C.yellowL, c: C.orange, r: 8 });
      s += T(240, 295, '허용농도 5,000[ppm] 이하 = 독성가스', { size: 14, b: 1, halo: false });
      return FIG.svg(480, 322, s);
    });

  add('p1-explosion-types', 'yo', 259, '폭발의 유형',
    ['폭발의 유형', '폭발의 영향 인자'],
    '폭발의 유형 다섯 가지 — 무엇 때문에 터지는가',
    function () {
      var C = FIG.C, s = '';
      var g = [['산화폭발', '가연성 가스의 폭발'], ['분해폭발', '가압 하 단일가스 — 아세틸렌'], ['중합폭발', '중합열에 의한 폭발 — 시안화수소'], ['촉매폭발', '직사일광 등에 의한 폭발'], ['분진폭발', 'Mg · Al 등 분말의 폭발']];
      g.forEach(function (r, i) {
        var y = 16 + i * 46;
        s += FIG.box(20, y, 124, 38, { fill: C.orangeL, c: C.orange, r: 8, label: r[0], lc: C.orange, size: 15, ans: true });
        s += star(166, y + 19, 10, 4, 8, { fill: C.yellowL });
        s += FIG.t(186, y + 19, r[1], { size: 14 });
      });
      return FIG.svg(480, 250, s);
    });

  /* @@ 다음 묶음은 여기 위에 붙인다 @@ */
})();

/* ───── figs-p2.js ───── */
/* ══════════════════════════════════════════════════════════════
   가스기능사 — PART 02 가스장치 및 기기 그림 (11번 칸 · 2026-11-27)
   공용 그리기 도우미 links/fig.js 로 **새로 그린** SVG 다. 교재 그림을 잘라 붙이거나 따라 그리지 않았다.
   교재(60–136쪽)는 "무엇을 그려야 하는지"와 수치만 참고했다. 수치는 교재에 있는 것만 넣었고,
   모양을 보여 주려고 넣은 곡선·비율은 캡션에 「예시」라고 적었다.

   한 칸의 모양 (문항-형식.md 4번)
     { key:'p2-…', chap:'p2c1', page:60, heading:'책의 소제목 글자 그대로', cap:'한 줄', draw:function(){…} }
     heading — 배우기 카드 t 와 같은 글자. 14번 칸이 이 글자로 카드에 붙인다.
     ans:true — 슬라이드(labels:false)에서 ? 로 가려지는 정답 이름표.

   chap: p2c1 가스장치(60–92) · p2c2 가스설비(93–125) · p2c3 측정기기 및 가스 분석(126–136)
   ══════════════════════════════════════════════════════════════ */
(function () {
  var RAW = window.GAS_FIGS_RAW = window.GAS_FIGS_RAW || [];
  function add(key, chap, page, heading, cap, draw) {
    RAW.push({ key: key, chap: chap, page: page, heading: heading, cap: cap, draw: draw });
  }

  /* ── 작은 도우미 (그릴 때 FIG 를 읽는다) ─────────────── */
  function C() { return FIG.C; }
  function T(x, y, s, o) { o = o || {}; if (o.a == null) o.a = 'm'; return FIG.t(x, y, s, o); }
  function S(x, y, s, o) { o = o || {}; o.size = o.size || 13; o.c = o.c || FIG.C.sub; if (o.a == null) o.a = 'm'; return FIG.t(x, y, s, o); }
  function B(x, y, w, h, label, o) {
    o = o || {}; var c = FIG.C;
    return FIG.box(x, y, w, h, { fill: o.fill || c.grayL, c: o.c || c.ink, label: label, size: o.size || 15,
      lc: o.lc || o.c || c.ink, b: o.b, r: o.r, ans: o.ans, w: o.w });
  }
  function A(x1, y1, x2, y2, o) {
    o = o || {}; if (o.head == null) o.head = 9; if (o.w == null) o.w = 1.6; if (!o.c) o.c = FIG.C.sub;
    return FIG.arrow(x1, y1, x2, y2, o);
  }
  function L(x1, y1, x2, y2, o) { o = o || {}; if (!o.c) o.c = FIG.C.ink; return FIG.line(x1, y1, x2, y2, o); }
  function dot(x, y, r, c) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 3) + '" fill="' + (c || FIG.C.ink) + '"/>'; }
  function ell(cx, cy, rx, ry, o) {
    o = o || {};
    return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + (o.fill || 'none') +
      '" stroke="' + (o.c || FIG.C.ink) + '" stroke-width="' + (o.w || 1.6) + '"' +
      (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + '/>';
  }
  function circ(cx, cy, r, o) { return FIG.circle(cx, cy, r, o || {}); }
  /* 묶음 괄호 — (x-10,y0) 에서 들어와 세로줄 x, 각 ys 로 오른쪽 10 만큼 */
  function brace(x, y0, ys, o) {
    o = o || {}; var c = o.c || FIG.C.line, all = ys.concat([y0]);
    var lo = Math.min.apply(null, all), hi = Math.max.apply(null, all), s = '';
    s += FIG.line(x - 10, y0, x, y0, { c: c, w: 1.4 }) + FIG.line(x, lo, x, hi, { c: c, w: 1.4 });
    ys.forEach(function (y) { s += FIG.line(x, y, x + 10, y, { c: c, w: 1.4 }); });
    return s;
  }
  /* 세로 스프링 (x 중심, y1→y2) */
  function spring(x, y1, y2, w, o) {
    o = o || {}; var n = o.n || 8, p = [[x, y1]], h = (y2 - y1) / (n + 1);
    for (var i = 1; i <= n; i++) p.push([x + (i % 2 ? -w / 2 : w / 2), y1 + h * i]);
    p.push([x, y2]);
    return FIG.poly(p, { c: o.c || FIG.C.blue, w: o.w || 2 });
  }
  /* 불꽃 — 바닥 (cx,base), 높이 h, 폭 w */
  function flame(cx, base, h, w, o) {
    o = o || {};
    var d = 'M' + cx + ',' + base + ' C' + (cx - w) + ',' + (base - h * 0.25) + ' ' + (cx - w * 0.35) + ',' + (base - h * 0.7) + ' ' + cx + ',' + (base - h) +
      ' C' + (cx + w * 0.35) + ',' + (base - h * 0.7) + ' ' + (cx + w) + ',' + (base - h * 0.25) + ' ' + cx + ',' + base + ' Z';
    return FIG.path(d, { fill: o.fill || FIG.C.orangeL, c: o.c || FIG.C.orange, w: o.w || 1.6 });
  }
  /* 그래프 축 */
  function axes(x0, y0, w, h, xl, yl) {
    var c = FIG.C.sub;
    return FIG.arrow(x0, y0, x0 + w, y0, { c: c, w: 1.4, head: 9 }) + FIG.arrow(x0, y0, x0, y0 - h, { c: c, w: 1.4, head: 9 }) +
      (xl ? FIG.t(x0 + w, y0 + 18, xl, { size: 13, c: c, a: 'e' }) : '') +
      (yl ? FIG.t(x0 + 8, y0 - h + 2, yl, { size: 13, c: c, a: 's' }) : '');
  }
  function pts2d(p) { return p.map(function (q, i) { return (i ? 'L' : 'M') + q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '); }

  /* ════════════════ CHAPTER 01 가스장치 (p2c1) ════════════════ */

  add('p2-vaporizer', 'p2c1', 60, '기화장치',
    '기화장치 — 용기의 LPG 액을 열교환기에서 데워 기체로 바꾸고, 조정기로 압력을 맞춰 보낸다',
    function () {
      var c = C(), s = '';
      s += FIG.box(24, 86, 54, 124, { fill: c.blueL, c: c.blue, r: 24 }) + L(51, 86, 51, 72, { c: c.blue, w: 3 });
      s += T(51, 230, '용기', { b: 1 });
      s += A(78, 150, 150, 150, { c: c.blue, w: 2 }) + S(114, 136, 'LPG 액', { c: c.blue });
      s += FIG.box(150, 96, 140, 120, { fill: c.orangeL, c: c.orange });
      s += T(220, 114, '열교환기', { b: 1, c: c.orange, ans: true });
      var z = 'M162,150'; for (var i = 0; i < 9; i++) z += ' L' + (174 + i * 12) + ',' + (i % 2 ? 150 : 166);
      s += FIG.path(z, { c: c.blue, w: 2 });
      s += S(220, 188, '온도 제어장치', { c: c.ink }) + S(220, 205, '과열 방지 장치', { c: c.ink });
      s += flame(200, 240, 18, 7) + flame(220, 240, 22, 8) + flame(240, 240, 18, 7) + T(220, 258, '열원', { size: 14 });
      s += L(250, 96, 250, 70, { c: c.red, w: 2 }) + FIG.box(241, 58, 18, 12, { fill: c.redL, c: c.red, r: 2 });
      s += A(250, 56, 250, 34, { c: c.red }) + T(266, 64, '안전변', { a: 's', b: 1, c: c.red }) + S(266, 40, '이상 승압 시 방출', { a: 's' });
      s += L(290, 150, 306, 150, { c: c.sub, w: 2 });
      s += B(306, 128, 72, 44, '일류 방지\n장치', { size: 13, fill: '#fff', ans: true });
      s += A(378, 150, 398, 150, { w: 2 });
      s += B(398, 128, 68, 44, '조정기', { fill: c.greenL, c: c.green, b: 1 });
      s += A(432, 172, 432, 212, { w: 2 }) + T(432, 228, '연소기로', { size: 14 });
      return FIG.svg(480, 270, s);
    });

  add('p2-vap-method', 'p2c1', 61, '작동원리에 따른 분류',
    '가온감압과 감압가온 — 데우는 것과 줄이는 것의 순서가 다르고, 쓰는 조정기도 다르다',
    function () {
      var c = C(), s = '';
      function row(y, title, col, first, second) {
        var r = T(16, y - 46, title, { a: 's', b: 1, c: col, size: 17 });
        r += B(16, y - 20, 76, 40, 'LPG 액', { fill: c.blueL, c: c.blue, size: 14 });
        r += A(92, y, 124, y, { w: 2 });
        r += first.box(124, y) + A(234, y, 266, y, { w: 2 }) + second.box(266, y);
        r += A(376, y, 420, y, { w: 2 }) + T(446, y, '기체', { size: 15 });
        r += first.sub(179, y + 38) + second.sub(321, y + 38);
        return r;
      }
      var HX = { box: function (x, y) { return B(x, y - 22, 110, 44, '열교환기\n(가온)', { fill: c.orangeL, c: c.orange, size: 14 }); },
        sub: function (x, y) { return S(x, y, '데워서 기화'); } };
      function RG(name) {
        return { box: function (x, y) { return B(x, y - 22, 110, 44, '조정기\n(감압)', { fill: c.greenL, c: c.green, size: 14 }); },
          sub: function (x, y) { return T(x, y, name, { size: 14, b: 1, c: c.green, ans: true }); } };
      }
      s += row(86, '가온감압방식', c.orange, HX, RG('가스용 조정기'));
      s += L(14, 142, 466, 142, { c: c.edge, w: 1.4 });
      s += row(204, '감압가온방식', c.green, RG('액용 조정기'), HX);
      return FIG.svg(480, 262, s);
    });

  add('p2-gov-static', 'p2c1', 62, '정압기의 특성',
    '정특성 — 유량에 따라 2차 압력이 설정압력(Ps)에서 벗어나는 정도. 세 값은 모두 작을수록 좋다 (곡선 모양은 예시)',
    function () {
      var c = C(), s = '';
      s += axes(70, 232, 392, 206, '', '');
      s += T(78, 24, '2차 압력(P₂)', { a: 's', size: 13, c: c.sub });
      s += T(466, 262, '유량(Q)', { a: 'e', size: 13, c: c.sub });
      s += L(70, 118, 452, 118, { c: c.sub, w: 1.2, dash: '6 4' }) + T(62, 118, 'Ps', { a: 'e', b: 1, size: 15 });
      s += FIG.path('M72,116 C84,138 110,148 150,152 C230,158 330,166 440,180', { c: c.sub, w: 2, dash: '7 5' });
      s += FIG.path('M72,82 C84,104 110,114 150,118 C230,124 330,132 440,146', { c: c.blue, w: 2.6 });
      s += L(150, 118, 150, 232, { c: c.line, w: 1, dash: '4 4' }) + S(150, 248, 'Qs') + S(440, 248, 'Qmax');
      s += L(440, 146, 440, 232, { c: c.line, w: 1, dash: '4 4' });
      s += A(82, 84, 82, 116, { c: c.orange, both: true, w: 1.4, head: 7 });
      s += T(96, 66, 'LOCK-UP', { a: 's', b: 1, c: c.orange, size: 15, ans: true });
      s += A(400, 120, 400, 140, { c: c.orange, both: true, w: 1.4, head: 7 });
      s += T(400, 100, 'OFF-SET', { b: 1, c: c.orange, size: 15, ans: true });
      s += A(270, 128, 270, 160, { c: c.purple, both: true, w: 1.4, head: 7 });
      s += T(270, 186, 'SHIFT', { b: 1, c: c.purple, size: 15, ans: true });
      s += S(200, 104, '정압곡선', { c: c.blue });
      return FIG.svg(480, 278, s);
    });

  add('p2-gov-flow', 'p2c1', 63, '정압기의 특성',
    '유량특성 — 메인밸브를 연 정도(개도)와 유량의 관계 (곡선은 식 모양대로 그린 것)',
    function () {
      var c = C(), s = '', x0 = 52, y0 = 236, W = 190;
      s += L(x0, y0 - W, x0 + W, y0 - W, { c: c.edge, w: 1 }) + L(x0 + W, y0 - W, x0 + W, y0, { c: c.edge, w: 1 });
      s += axes(x0, y0, W + 14, W + 14, '', '');
      s += T(x0 + W, y0 + 18, '메인밸브 개도', { a: 'e', size: 13, c: c.sub });
      s += T(x0 + 8, 30, '유량', { a: 's', size: 13, c: c.sub });
      function curve(f, col) {
        var p = []; for (var i = 0; i <= 40; i++) { var u = i / 40; p.push([x0 + W * u, y0 - W * f(u)]); }
        return FIG.path(pts2d(p), { c: col, w: 2.6 });
      }
      s += curve(function (u) { return Math.sqrt(u); }, c.orange);
      s += curve(function (u) { return u; }, c.blue);
      s += curve(function (u) { return u * u; }, c.green);
      var ent = [['직선형', '유량 = K × 개도', '개구부 직사각형', c.blue],
        ['2차형', '유량 = K × 개도²', '개구부 V형 · 안정성 좋음', c.green],
        ['평방근형', '유량 = K × √개도', '접시모양 · 안정성 나쁨', c.orange]];
      ent.forEach(function (e, i) {
        var y = 62 + i * 64;
        s += L(266, y, 290, y, { c: e[3], w: 4 }) + T(298, y, e[0], { a: 's', b: 1, c: e[3], ans: true });
        s += S(298, y + 21, e[1], { a: 's', c: c.ink }) + S(298, y + 39, e[2], { a: 's' });
      });
      return FIG.svg(480, 270, s);
    });

  add('p2-gov-direct', 'p2c1', 63, '작동원리',
    '직동식 정압기 — 2차 압력이 오르면 다이어프램이 밀려 올라가 메인밸브를 닫는 쪽으로 당긴다',
    function () {
      var c = C(), s = '';
      s += FIG.box(180, 40, 120, 64, { fill: c.grayL, c: c.ink, r: 6 }) + spring(240, 44, 102, 26, { n: 9 });
      s += FIG.box(180, 104, 120, 36, { fill: '#fff', c: c.ink, r: 4 });
      s += L(172, 104, 308, 104, { c: c.purple, w: 4 });
      s += L(232, 140, 232, 150, { w: 1.6 }) + L(248, 140, 248, 150, { w: 1.6 });
      s += FIG.box(24, 150, 432, 100, { fill: '#fff', c: c.ink, r: 4, w: 2.2 });
      s += L(200, 150, 200, 198, { w: 2.2 }) + L(200, 198, 222, 198, { w: 2.2 }) + L(258, 198, 280, 198, { w: 2.2 }) + L(280, 198, 280, 250, { w: 2.2 });
      s += L(240, 104, 240, 206, { w: 3 });
      s += FIG.box(216, 204, 48, 10, { fill: c.orangeL, c: c.orange, r: 2 });
      s += FIG.route([[380, 150], [380, 122], [302, 122]], { c: c.green, w: 1.6, head: 8 });
      s += S(388, 136, '2차 압력', { a: 's', c: c.green });
      s += A(36, 226, 118, 226, { c: c.blue, w: 2.4 }) + A(296, 172, 446, 172, { c: c.blue, w: 2.4 });
      s += T(70, 272, '1차측', { b: 1 }) + T(410, 272, '2차측', { b: 1 });
      s += FIG.callout(252, 66, 326, 50, '스프링', { b: 1 }) + T(392, 50, '부하부', { a: 's', b: 1, c: c.blue, ans: true });
      s += FIG.callout(300, 104, 326, 90, '다이어프램', { b: 1 }) + T(414, 90, '감지부', { a: 's', b: 1, c: c.purple, ans: true });
      s += FIG.callout(216, 209, 150, 176, '메인밸브', { a: 'e', b: 1 }) + T(144, 198, '제어부', { a: 'e', b: 1, c: c.orange, ans: true });
      return FIG.svg(480, 290, s);
    });

  add('p2-gov-press', 'p2c1', 65, '압력에 따른 분류',
    '정압기 — 압력에 따른 분류 (단위 [kg/cm²])',
    function () {
      var c = C(), s = '';
      s += FIG.box(30, 64, 120, 46, { fill: c.blueL, c: c.blue, r: 0, label: '저압 정압기', size: 15, lc: c.blue, b: 1 });
      s += FIG.box(150, 64, 160, 46, { fill: c.orangeL, c: c.orange, r: 0, label: '중압 정압기', size: 15, lc: c.orange, b: 1 });
      s += FIG.box(310, 64, 140, 46, { fill: c.redL, c: c.red, r: 0, label: '고압 정압기', size: 15, lc: c.red, b: 1 });
      s += L(150, 56, 150, 120, { w: 2 }) + L(310, 56, 310, 120, { w: 2 });
      s += T(150, 138, '1', { b: 1, size: 18, ans: true }) + T(310, 138, '10', { b: 1, size: 18, ans: true });
      s += S(466, 162, '[kg/cm²]', { a: 'e' });
      s += S(90, 32, '~ 미만', { c: c.ink }) + S(230, 32, '이상 ~ 미만', { c: c.ink }) + S(380, 32, '이상 ~', { c: c.ink });
      return FIG.svg(480, 180, s);
    });

  add('p2-expansion', 'p2c1', 68, '고압 조인트',
    '신축 조인트 4가지 — 온도 변화로 관이 늘고 줄어드는 것을 흡수한다',
    function () {
      var c = C(), s = '', P = { c: c.blue, w: 6 };
      var cell = [[10, 8], [245, 8], [10, 138], [245, 138]];
      s += L(240, 14, 240, 258, { c: c.edge, w: 1.4 }) + L(16, 134, 464, 134, { c: c.edge, w: 1.4 });
      function lab(i, name, a, b) {
        var x = cell[i][0], y = cell[i][1];
        return T(x + 112, y + 86, name, { b: 1, ans: true }) + S(x + 112, y + 106, a) + S(x + 112, y + 122, b);
      }
      var x = 10, y = 8;
      s += FIG.path('M' + (x + 20) + ',' + (y + 62) + ' H' + (x + 86) + ' V' + (y + 34) + ' A26,26 0 0 1 ' + (x + 138) + ',' + (y + 34) +
        ' V' + (y + 62) + ' H' + (x + 205), P);
      s += lab(0, '루프형(만곡관형)', '고온·고압용 · 주로 옥외 배관', '굽힘 반지름 6배 이상');
      x = 245; y = 8;
      s += FIG.box(x + 20, y + 40, 96, 16, { fill: c.blueL, c: c.blue, r: 2 }) + FIG.box(x + 118, y + 40, 87, 16, { fill: c.blueL, c: c.blue, r: 2 });
      s += FIG.box(x + 80, y + 32, 72, 32, { fill: 'none', c: c.ink, r: 3, w: 2.2 });
      s += A(x + 92, y + 22, x + 140, y + 22, { both: true, head: 7, w: 1.2 });
      s += lab(1, '슬리브형', '주로 8[kg/cm²] 이하의', '유체 수송관');
      x = 10; y = 138;
      s += FIG.box(x + 20, y + 42, 60, 16, { fill: c.blueL, c: c.blue, r: 2 }) + FIG.box(x + 150, y + 42, 55, 16, { fill: c.blueL, c: c.blue, r: 2 });
      var top = [], bot = [];
      for (var i = 0; i <= 10; i++) { top.push([x + 80 + i * 7, y + (i % 2 ? 38 : 30)]); bot.push([x + 80 + i * 7, y + (i % 2 ? 62 : 70)]); }
      s += FIG.poly(top, { c: c.ink, w: 1.8 }) + FIG.poly(bot, { c: c.ink, w: 1.8 }) + L(x + 80, y + 30, x + 80, y + 70, { w: 1.8 }) + L(x + 150, y + 30, x + 150, y + 70, { w: 1.8 });
      s += lab(2, '벨로우즈형', '주로 저압 · 냉난방용', '청동·스테인리스 주름');
      x = 245; y = 138;
      s += FIG.path('M' + (x + 20) + ',' + (y + 66) + ' H' + (x + 74) + ' V' + (y + 34) + ' H' + (x + 140) + ' V' + (y + 66) + ' H' + (x + 205), P);
      s += dot(x + 74, y + 66, 6) + dot(x + 74, y + 34, 6) + dot(x + 140, y + 34, 6) + dot(x + 140, y + 66, 6);
      s += lab(3, '스위블형', '엘보 2개 이상 사용', '방열기 주위 배관');
      return FIG.svg(480, 276, s);
    });

  add('p2-steel-map', 'p2c1', 69, '강관',
    '배관용 강관 — 온도·압력에 따라 쓰는 KS 기호 (교재 표를 한 장으로 정리, 칸 자리는 단순화)',
    function () {
      var c = C(), s = '';
      s += S(150, 32, '빙점 이하', { b: 1, c: c.ink }) + S(280, 32, '350[℃] 이하', { b: 1, c: c.ink }) + S(413, 32, '350[℃] 이상', { b: 1, c: c.ink });
      s += S(54, 88, '10[MPa]\n이상', { c: c.ink }) + S(54, 152, '1~10\n[MPa]', { c: c.ink }) + S(54, 216, '1[MPa]\n이하', { c: c.ink });
      s += L(96, 48, 96, 248, { c: c.edge }) + L(14, 52, 466, 52, { c: c.edge });
      function cell(x, y, w, h, sym, sub, fill, col) {
        var two = sub.indexOf('\n') >= 0;
        return FIG.box(x, y, w, h, { fill: fill, c: col, r: 6 }) + T(x + w / 2, y + h / 2 - (two ? 26 : 9), sym, { b: 1, size: 18, c: col, ans: true, halo: false }) +
          S(x + w / 2, y + h / 2 + (two ? 20 : 14), sub, { c: c.ink, halo: false });
      }
      s += cell(102, 58, 92, 186, 'SPLT', '저온\n배관용', c.blueL, c.blue);
      s += cell(202, 58, 156, 58, 'SPPH', '고압 배관용 탄소 강관', c.orangeL, c.orange);
      s += cell(202, 122, 156, 58, 'SPPS', '압력 배관용 탄소 강관', c.yellowL, c.orange);
      s += cell(202, 186, 156, 58, 'SPP · SPW', '배관용 탄소 강관', c.greenL, c.green);
      s += cell(366, 58, 98, 186, 'SPHT', '고온\n배관용', c.redL, c.red);
      return FIG.svg(480, 256, s);
    });

  add('p2-sch', 'p2c1', 70, '강관',
    '스케줄 번호(Sch No) — 관의 두께를 나타내는 번호',
    function () {
      var c = C(), s = '';
      s += circ(104, 112, 72, { fill: c.grayM, c: c.ink, w: 2 }) + circ(104, 112, 52, { fill: '#fff', c: c.ink, w: 2 });
      s += A(104, 112, 156, 112, { c: c.sub, w: 1, head: 7 });
      s += FIG.callout(166, 98, 140, 30, '관 두께', { a: 'e', b: 1 });
      s += T(104, 210, '두께 → 스케줄 번호', { size: 14 });
      s += FIG.box(206, 34, 260, 100, { fill: c.blueL, c: c.blue });
      s += T(336, 64, 'Sch No = 10 × P / S', { b: 1, size: 19, c: c.blue, halo: false });
      s += S(336, 96, 'P : 사용압력[kg/cm²]', { c: c.ink, halo: false }) + S(336, 116, 'S : 허용응력[kg/mm²]', { c: c.ink, halo: false });
      s += T(336, 162, 'S = 인장강도 / 안전율', { size: 15 });
      s += S(336, 190, '1[MPa] = 10[kg/cm²]');
      return FIG.svg(480, 226, s);
    });

  add('p2-fittings', 'p2c1', 74, '관이음 재료',
    '나사 이음 — 쓰는 목적에 따라 고르는 이음쇠',
    function () {
      var c = C(), s = '', P = { c: c.blue, w: 8 };
      var rows = [['방향을 바꿀 때', '엘보 · 밴드 · 리턴밴드'], ['관 도중에서 분기할 때', '티 · 와이 · 크로스'],
        ['같은 지름의 관을 직선 연결', '소켓 · 유니온 · 플랜지 · 니플'], ['다른 지름의 관을 연결', '이경 소켓 · 이경 엘보 · 이경 티 · 부싱'],
        ['관 끝을 막을 때', '플러그(관이 암나사) · 캡(관이 수나사)']];
      rows.forEach(function (r, i) {
        var y = 34 + i * 56;
        if (i) s += L(14, y - 28, 466, y - 28, { c: c.edge, w: 1 });
        if (i === 0) s += FIG.path('M24,' + (y + 14) + ' H60 V' + (y - 18), P) + FIG.box(52, y + 6, 16, 16, { fill: c.grayM, r: 2 });
        if (i === 1) s += L(22, y + 10, 82, y + 10, P) + L(52, y + 10, 52, y - 18, P) + FIG.box(44, y + 2, 16, 16, { fill: c.grayM, r: 2 });
        if (i === 2) s += L(22, y, 46, y, P) + L(58, y, 82, y, P) + FIG.box(42, y - 9, 20, 18, { fill: c.grayM, r: 2 });
        if (i === 3) s += L(22, y, 46, y, { c: c.blue, w: 12 }) + FIG.poly([[44, y - 9], [56, y - 5], [56, y + 5], [44, y + 9]], { close: 1, fill: c.grayM, c: c.ink, w: 1.4 }) + L(56, y, 82, y, { c: c.blue, w: 5 });
        if (i === 4) s += L(22, y, 62, y, P) + FIG.box(60, y - 10, 14, 20, { fill: c.ink, r: 3 });
        s += T(100, y - 10, r[0], { a: 's', b: 1, size: 15 }) + T(100, y + 12, r[1], { a: 's', size: 14, c: c.blue, ans: true });
      });
      return FIG.svg(480, 296, s);
    });

  add('p2-cyl-valve', 'p2c1', 78, '용기용 밸브',
    '용기 밸브 충전구 — 나사 모양(A·B·C형)과 나사 방향',
    function () {
      var c = C(), s = '';
      [['A형', '충전구 수나사', 0], ['B형', '충전구 암나사', 1], ['C형', '충전구 나사 없음', 2]].forEach(function (k) {
        var cx = 86 + k[2] * 154, i;
        s += FIG.box(cx - 40, 30, 36, 8, { fill: c.grayM, r: 2 }) + L(cx - 22, 38, cx - 22, 52, { w: 3 });
        s += FIG.box(cx - 44, 52, 44, 62, { fill: c.grayL, r: 6 });
        if (k[2] === 1) {
          s += FIG.box(cx, 66, 42, 32, { fill: c.grayL, r: 2 }) + FIG.box(cx + 12, 73, 30, 18, { fill: '#fff', c: c.ink, r: 1, w: 1.2 });
          for (i = 0; i < 4; i++) s += L(cx + 16 + i * 7, 73, cx + 20 + i * 7, 77, { w: 1.2 }) + L(cx + 16 + i * 7, 91, cx + 20 + i * 7, 87, { w: 1.2 });
        } else {
          s += FIG.box(cx, 70, 42, 24, { fill: c.grayL, r: 2 });
          if (k[2] === 0) for (i = 0; i < 5; i++) s += L(cx + 8 + i * 7, 64, cx + 12 + i * 7, 70, { w: 1.2 }) + L(cx + 8 + i * 7, 100, cx + 12 + i * 7, 94, { w: 1.2 });
        }
        s += T(cx, 140, k[0], { b: 1, size: 18 }) + T(cx, 166, k[1], { size: 15, b: 1, c: c.blue, ans: true });
      });
      s += FIG.box(14, 190, 452, 52, { fill: c.yellowL, c: c.orange });
      s += T(240, 206, '가연성 가스 충전구 → 왼나사 (NH₃ · CH₃Br 은 제외)', { size: 14, halo: false });
      s += T(240, 228, '가연성 가스 이외 → 오른나사', { size: 14, halo: false });
      return FIG.svg(480, 254, s);
    });

  add('p2-tank-cyl', 'p2c1', 81, '원통형 저장탱크',
    '횡형 원통형 저장탱크 — 동체와 양쪽 경판, 위에는 안전밸브·맨홀·액면계, 아래에는 드레인',
    function () {
      var c = C(), s = '';
      s += FIG.path('M110,90 A40,48 0 0 0 110,186 Z', { fill: c.blueL, c: c.blue, w: 2 }) + FIG.path('M370,90 A40,48 0 0 1 370,186 Z', { fill: c.blueL, c: c.blue, w: 2 });
      s += FIG.box(110, 90, 260, 96, { fill: c.blueL, c: c.blue, r: 0, w: 2 });
      s += T(240, 140, '동체', { b: 1, c: c.blue, halo: false });
      s += FIG.poly([[140, 186], [180, 186], [186, 214], [134, 214]], { close: 1, fill: c.grayM, c: c.ink, w: 1.4 });
      s += FIG.poly([[300, 186], [340, 186], [346, 214], [294, 214]], { close: 1, fill: c.grayM, c: c.ink, w: 1.4 });
      s += L(40, 214, 440, 214, { c: c.sub, w: 1.6 });
      s += L(330, 90, 330, 68, { c: c.red, w: 2 }) + FIG.box(322, 56, 16, 12, { fill: c.redL, c: c.red, r: 2 });
      s += FIG.box(222, 72, 36, 18, { fill: c.grayL, r: 2 });
      s += L(160, 90, 160, 76, { w: 2 }) + FIG.box(154, 64, 12, 14, { fill: '#fff', r: 2 });
      s += L(250, 186, 250, 204, { w: 2 }) + FIG.box(244, 202, 12, 8, { fill: c.grayM, r: 1 });
      s += FIG.callout(82, 140, 44, 64, '경판', { a: 'm', b: 1 });
      s += FIG.callout(240, 72, 252, 34, '맨홀', { a: 's', b: 1 });
      s += FIG.callout(338, 60, 372, 34, '안전밸브', { a: 's', b: 1 });
      s += FIG.callout(158, 66, 132, 34, '액면계', { a: 'e', b: 1 });
      s += FIG.callout(320, 208, 380, 238, '지지대', { a: 's', b: 1 });
      s += FIG.callout(250, 210, 214, 238, '드레인', { a: 'e', b: 1 });
      return FIG.svg(480, 256, s);
    });

  add('p2-tank-vol', 'p2c1', 81, '원통형 저장탱크',
    '원통형 저장탱크의 내용적 — V: 내용적[m³] · r: 반지름[m] · l: 원통부 길이[m]',
    function () {
      var c = C(), s = '';
      s += FIG.box(50, 46, 70, 130, { fill: c.blueL, c: c.blue, r: 4, w: 2 });
      s += L(85, 46, 85, 176, { c: c.sub, w: 1, dash: 'center' });
      s += FIG.dim(85, 34, 120, 34, 'r', { size: 15 });
      s += A(138, 48, 138, 174, { both: true, head: 8, w: 1, c: c.ink }) + T(146, 111, 'l', { a: 's', size: 16, b: 1 });
      s += T(85, 200, '입형', { b: 1 }) + T(85, 230, 'V = πr²l', { size: 16, b: 1, c: c.blue });
      s += FIG.path('M220,80 A30,35 0 0 0 220,150 Z', { fill: c.blueL, c: c.blue, w: 2 }) + FIG.path('M400,80 A30,35 0 0 1 400,150 Z', { fill: c.blueL, c: c.blue, w: 2 });
      s += FIG.box(220, 80, 180, 70, { fill: c.blueL, c: c.blue, r: 0, w: 2 });
      s += L(186, 115, 434, 115, { c: c.sub, w: 1, dash: 'center' });
      s += A(310, 113, 310, 82, { head: 8, w: 1, c: c.ink }) + T(318, 98, 'r', { a: 's', size: 15, b: 1 });
      s += FIG.dim(220, 80, 400, 80, 'l', { off: 18, size: 16 });
      s += FIG.dim(190, 150, 220, 150, 'l₁', { off: 18, side: -1, size: 15 }) + FIG.dim(400, 150, 430, 150, 'l₂', { off: 18, side: -1, size: 15 });
      s += T(310, 200, '횡형', { b: 1 }) + T(310, 230, 'V = πr²(l + (l₁ + l₂)/3)', { size: 16, b: 1, c: c.blue });
      return FIG.svg(480, 250, s);
    });

  add('p2-tank-sphere', 'p2c1', 82, '구형 저장탱크',
    '구형 저장탱크 — 단각식과 이중각식 (쓰는 온도와 재료)',
    function () {
      var c = C(), s = '';
      function legs(cx) { return L(cx - 46, 150, cx - 52, 206, { w: 3 }) + L(cx + 46, 150, cx + 52, 206, { w: 3 }) + L(cx - 14, 176, cx - 14, 206, { w: 3 }) + L(cx + 14, 176, cx + 14, 206, { w: 3 }); }
      s += L(20, 206, 460, 206, { c: c.sub });
      s += legs(120) + circ(120, 106, 78, { fill: c.yellowL, c: c.orange, w: 1.6 }) + circ(120, 106, 66, { fill: c.blueL, c: c.blue, w: 2 });
      s += FIG.callout(176, 52, 208, 28, '단열재', { a: 's', b: 1 });
      s += legs(360) + circ(360, 106, 80, { fill: c.yellowL, c: c.ink, w: 2.2 }) + circ(360, 106, 62, { fill: c.blueL, c: c.blue, w: 2 });
      s += S(360, 106, '내구\n저온용 강재', { c: c.blue, halo: false });
      s += FIG.callout(420, 52, 452, 24, '외구', { a: 'm', b: 1 });
      s += FIG.callout(298, 140, 262, 160, '보냉재', { a: 'e', b: 1 });
      s += T(120, 228, '단각식', { b: 1, size: 17 }) + T(360, 228, '이중각식', { b: 1, size: 17 });
      s += T(120, 250, '상온 ~ −30[℃] 전후', { size: 14, c: c.blue, b: 1, ans: true }) + T(360, 250, '−50[℃] 이하', { size: 14, c: c.blue, b: 1, ans: true });
      s += S(120, 272, '2.5[%]·3.5[%] Ni강') + S(360, 272, '스테인리스강 · 알루미늄강 · 9[%] Ni강');
      return FIG.svg(480, 288, s);
    });

  add('p2-comp-class', 'p2c1', 83, '압축기의 종류 및 적용범위',
    '압축기 — 압축 방식에 따른 종류와 토출압력에 따른 구분',
    function () {
      var c = C(), s = '';
      s += B(14, 110, 74, 40, '압축기', { b: 1 });
      s += brace(102, 130, [70, 186]);
      s += B(112, 52, 86, 36, '용적형', { fill: c.blueL, c: c.blue, b: 1, ans: true });
      s += B(112, 168, 86, 36, '터보형', { fill: c.orangeL, c: c.orange, b: 1, ans: true });
      s += S(155, 102, '소용량 · 고압') + S(155, 218, '큰 용량');
      s += brace(214, 70, [36, 70, 104]);
      s += T(228, 36, '왕복동식', { a: 's', size: 15 }) + T(228, 70, '회전식', { a: 's', size: 15 }) + T(228, 104, '스크루식', { a: 's', size: 15 });
      s += brace(214, 186, [168, 204]);
      s += T(228, 168, '원심식', { a: 's', size: 15 }) + T(228, 204, '축류식', { a: 's', size: 15 });
      s += L(304, 16, 304, 244, { c: c.edge, w: 1.4 });
      s += T(388, 24, '토출압력으로 구분', { size: 14, b: 1 });
      [['압축기', '1 이상', c.redL, c.red], ['송풍기', '0.1 이상 ~ 1 미만', c.orangeL, c.orange], ['팬', '0.1 미만', c.greenL, c.green]].forEach(function (k, i) {
        var y = 40 + i * 62;
        s += FIG.box(318, y, 140, 58, { fill: k[2], c: k[3], r: 6 });
        s += T(388, y + 20, k[0], { b: 1, c: k[3], halo: false }) + S(388, y + 42, k[1], { c: c.ink, halo: false, ans: true });
      });
      s += S(388, 244, '[kg/cm²]');
      return FIG.svg(480, 258, s);
    });

  add('p2-blade', 'p2c1', 85, '압축기의 종류 및 적용범위',
    '원심식 압축기 — 임펠러 날개의 출구각(β)에 따른 구분',
    function () {
      var c = C(), s = '';
      s += T(240, 24, '임펠러 출구각 β — 회전 방향은 →', { size: 14, b: 1 });
      [['터보형', 50, '90°보다 작음'], ['레이디얼형', 90, '90°'], ['다익형', 130, '90°보다 큼']].forEach(function (k, i) {
        var cx = 86 + i * 154, y = 150, a = k[1] * Math.PI / 180;
        var ex = cx - 84 * Math.cos(a), ey = y - 84 * Math.sin(a);
        var ax = cx - 28 * Math.cos(a), ay = y - 28 * Math.sin(a);
        s += L(cx - 64, y, cx + 40, y, { c: c.sub, w: 1.4 }) + A(cx + 40, y, cx + 66, y, { c: c.sub, head: 8 });
        s += FIG.path('M' + (cx - 28) + ',' + y + ' A28,28 0 0 1 ' + ax.toFixed(1) + ',' + ay.toFixed(1), { c: c.orange, w: 1.6 });
        s += L(cx, y, ex, ey, { c: c.blue, w: 5 });
        s += T(cx - 36 * Math.cos(a / 2), y - 36 * Math.sin(a / 2) - 2, 'β', { size: 14, b: 1, c: c.orange });
        s += T(cx, 182, k[0], { b: 1, ans: true }) + S(cx, 204, '출구각 ' + k[2], { c: c.ink });
      });
      return FIG.svg(480, 220, s);
    });

  add('p2-piston', 'p2c1', 86, '피스톤 압출량',
    '왕복동 압축기의 피스톤 압출량 — 한 번 움직인 부피 × 기통 수 × 회전 수',
    function () {
      var c = C(), s = '';
      s += L(140, 56, 140, 222, { w: 3 }) + L(260, 56, 260, 222, { w: 3 }) + L(140, 56, 260, 56, { w: 3 });
      s += FIG.poly([[160, 56], [182, 56], [178, 46], [164, 46]], { close: 1, fill: c.blueL, c: c.blue, w: 1.4 });
      s += FIG.poly([[218, 56], [240, 56], [236, 46], [222, 46]], { close: 1, fill: c.orangeL, c: c.orange, w: 1.4 });
      s += A(171, 18, 171, 42, { c: c.blue }) + A(229, 42, 229, 18, { c: c.orange });
      s += FIG.box(142, 70, 116, 28, { fill: 'none', c: c.sub, r: 2, w: 1.4 }).replace('/>', ' stroke-dasharray="6 4"/>');
      s += FIG.box(142, 180, 116, 28, { fill: c.grayM, c: c.ink, r: 2 });
      s += L(200, 208, 214, 244, { w: 3 }) + circ(214, 244, 5, { fill: c.ink });
      s += FIG.dim(140, 140, 260, 140, 'D', { size: 16 });
      s += A(280, 70, 280, 180, { both: true, head: 8, w: 1, c: c.ink }) + T(288, 125, 'L', { a: 's', size: 16, b: 1 });
      s += FIG.callout(166, 46, 110, 30, '흡입밸브', { a: 'e', b: 1 });
      s += FIG.callout(234, 46, 290, 30, '토출밸브', { a: 's', b: 1 });
      s += FIG.callout(144, 194, 110, 194, '피스톤', { a: 'e', b: 1 });
      s += T(388, 96, 'V = π/4 × D² × L', { size: 15, b: 1, c: c.blue });
      s += T(388, 118, '× N × R × 60', { size: 15, b: 1, c: c.blue });
      s += S(318, 154, 'V : 압출량[m³/h]', { a: 's', c: c.ink }) + S(318, 174, 'D : 실린더 안지름[m]', { a: 's', c: c.ink }) +
        S(318, 194, 'L : 피스톤 행정[m]', { a: 's', c: c.ink }) + S(318, 214, 'N : 기통 수', { a: 's', c: c.ink }) + S(318, 234, 'R : 분당 회전 수[rpm]', { a: 's', c: c.ink });
      return FIG.svg(480, 256, s);
    });

  add('p2-engine', 'p2c1', 87, '내연기관의 용어',
    '피스톤의 위치와 부피 — 상사점·하사점·행정·압축부피(간극 부피)·행정부피',
    function () {
      var c = C(), s = '';
      s += FIG.box(152, 40, 116, 30, { fill: c.purpleL, c: 'none', r: 0 }) + FIG.box(152, 70, 116, 110, { fill: c.blueL, c: 'none', r: 0 });
      s += L(150, 38, 150, 226, { w: 3 }) + L(270, 38, 270, 226, { w: 3 }) + L(150, 38, 270, 38, { w: 3 });
      s += T(210, 55, '압축부피', { size: 14, b: 1, c: c.purple, halo: false });
      s += T(210, 125, '행정부피', { size: 15, b: 1, c: c.blue, halo: false });
      s += FIG.box(152, 70, 116, 24, { fill: 'none', c: c.sub, r: 2, w: 1.4 }).replace('/>', ' stroke-dasharray="6 4"/>');
      s += FIG.box(152, 180, 116, 28, { fill: c.grayM, c: c.ink, r: 2 }) + L(210, 208, 210, 234, { w: 3 });
      s += L(118, 70, 150, 70, { c: c.sub, w: 1, dash: '4 3' }) + L(118, 180, 150, 180, { c: c.sub, w: 1, dash: '4 3' });
      s += T(114, 70, '상사점', { a: 'e', b: 1, ans: true }) + T(114, 180, '하사점', { a: 'e', b: 1, ans: true });
      s += A(292, 72, 292, 178, { both: true, head: 8, w: 1.2, c: c.ink }) + T(302, 125, '행정', { a: 's', b: 1, ans: true });
      s += S(380, 70, '피스톤이 맨 위', { c: c.sub }) + S(380, 180, '피스톤이 맨 아래', { c: c.sub });
      s += L(14, 248, 466, 248, { c: c.edge, w: 1 });
      s += T(240, 270, '압축비 = 실린더 부피 / 압축부피 = 1 + 행정부피 / 압축부피', { size: 14, b: 1 });
      return FIG.svg(480, 290, s);
    });

  add('p2-pump-class', 'p2c1', 88, '펌프의 분류',
    '펌프의 분류 — 터보식·왕복식·회전식·기타',
    function () {
      var c = C(), s = '';
      s += B(14, 128, 62, 40, '펌프', { b: 1 });
      s += brace(92, 148, [58, 136, 188, 240]);
      [['터보식', 58, c.blueL, c.blue], ['왕복식', 136, c.orangeL, c.orange], ['회전식', 188, c.greenL, c.green], ['기타', 240, c.grayL, c.ink]].forEach(function (k) {
        s += B(102, k[1] - 17, 84, 34, k[0], { fill: k[2], c: k[3], b: 1, ans: true });
      });
      s += brace(202, 58, [26, 58, 90]);
      s += T(216, 26, '원심펌프 — 볼류트 · 터빈', { a: 's', size: 15 }) + T(216, 58, '사류펌프', { a: 's', size: 15 }) + T(216, 90, '축류펌프', { a: 's', size: 15 });
      s += L(186, 136, 210, 136, { c: c.line, w: 1.4 }) + T(216, 136, '피스톤 · 플런저 · 다이어프램', { a: 's', size: 15 });
      s += L(186, 188, 210, 188, { c: c.line, w: 1.4 }) + T(216, 188, '기어 · 베인 · 나사(스크루)', { a: 's', size: 15 });
      s += L(186, 240, 210, 240, { c: c.line, w: 1.4 }) + T(216, 240, '분사 · 기포 · 수격', { a: 's', size: 15 });
      s += L(14, 112, 466, 112, { c: c.edge, w: 1 });
      return FIG.svg(480, 266, s);
    });

  add('p2-volute', 'p2c1', 88, '펌프의 분류',
    '원심펌프 — 임펠러 둘레에 안내 깃(가이드 베인)이 있느냐로 나눈다',
    function () {
      var c = C(), s = '';
      function pump(cx, cy, vane) {
        var r = '', p = [], i, a;
        for (i = 0; i <= 60; i++) { a = i / 60 * 2 * Math.PI; var rr = 54 + 22 * i / 60; p.push([cx + rr * Math.cos(a - Math.PI / 2), cy + rr * Math.sin(a - Math.PI / 2)]); }
        var last = p[p.length - 1];
        p.push([last[0] + 40, last[1]]);
        r += FIG.path(pts2d(p), { c: c.ink, w: 2.4 });
        r += L(cx, cy - 54, cx, cy - 76, { w: 2.4 });
        r += circ(cx, cy, 34, { fill: c.blueL, c: c.blue, w: 1.6 }) + circ(cx, cy, 8, { fill: c.ink });
        for (i = 0; i < 6; i++) {
          a = i / 6 * 2 * Math.PI;
          r += FIG.path('M' + (cx + 10 * Math.cos(a)).toFixed(1) + ',' + (cy + 10 * Math.sin(a)).toFixed(1) + ' Q' + (cx + 24 * Math.cos(a + 0.2)).toFixed(1) + ',' + (cy + 24 * Math.sin(a + 0.2)).toFixed(1) + ' ' + (cx + 32 * Math.cos(a + 0.6)).toFixed(1) + ',' + (cy + 32 * Math.sin(a + 0.6)).toFixed(1), { c: c.blue, w: 2 });
        }
        if (vane) for (i = 0; i < 10; i++) {
          a = i / 10 * 2 * Math.PI;
          r += L(cx + 40 * Math.cos(a), cy + 40 * Math.sin(a), cx + 50 * Math.cos(a + 0.35), cy + 50 * Math.sin(a + 0.35), { c: c.orange, w: 2.6 });
        }
        return r;
      }
      s += pump(120, 108, false) + pump(350, 108, true);
      s += FIG.callout(350 + 47 * Math.cos(-0.5), 108 + 47 * Math.sin(-0.5), 456, 40, '가이드 베인', { a: 'e', b: 1 });
      s += T(120, 206, '볼류트 펌프', { b: 1, ans: true }) + S(120, 226, '가이드 베인 없음', { c: c.ink });
      s += T(350, 206, '터빈 펌프', { b: 1, ans: true }) + S(350, 226, '가이드 베인 있음', { c: c.ink });
      return FIG.svg(480, 240, s);
    });

  add('p2-cavitation', 'p2c1', 90, '펌프에서 일어나는 현상',
    '캐비테이션(공동현상) — 흐르는 물의 압력이 그 온도의 증기압보다 낮아지면 물이 증발해 기포가 생긴다 (압력선 모양은 예시)',
    function () {
      var c = C(), s = '';
      s += FIG.box(30, 54, 272, 30, { fill: c.blueL, c: c.blue, r: 2 });
      s += A(44, 69, 110, 69, { c: c.blue, w: 2 });
      s += circ(340, 69, 34, { fill: c.grayL, c: c.ink, w: 2 }) + T(340, 69, '펌프', { size: 14, b: 1, halo: false });
      s += FIG.box(330, 4, 20, 32, { fill: c.blueL, c: c.blue, r: 2 });
      [[268, 62], [280, 74], [290, 60], [296, 76], [276, 66]].forEach(function (p) { s += circ(p[0], p[1], 4, { fill: '#fff', c: c.red, w: 1.4 }); });
      s += FIG.callout(284, 58, 236, 30, '기포 발생', { a: 'e', b: 1, c: c.red, tc: c.red });
      s += L(290, 90, 290, 236, { c: c.line, w: 1, dash: '4 4' });
      s += axes(40, 240, 420, 130, '흐름 →', '압력');
      s += L(40, 206, 456, 206, { c: c.orange, w: 1.6, dash: '7 5' }) + T(456, 194, '증기압', { a: 'e', b: 1, c: c.orange, size: 15, ans: true });
      s += FIG.path('M50,140 C150,150 230,170 268,212 C280,226 296,226 306,214 L318,150 C360,140 410,138 450,136', { c: c.blue, w: 2.6 });
      s += S(110, 128, '물의 압력', { c: c.blue });
      return FIG.svg(480, 272, s);
    });

  add('p2-jt', 'p2c1', 91, '줄-톰슨 효과(Joule-Thomson)',
    '줄-톰슨 효과 — 압축가스를 단열 팽창시키면 압력과 온도가 내려간다',
    function () {
      var c = C(), s = '', i;
      s += FIG.box(30, 64, 170, 80, { fill: c.orangeL, c: c.ink, r: 4 });
      s += FIG.box(230, 64, 220, 80, { fill: c.blueL, c: c.ink, r: 4 });
      s += FIG.poly([[200, 64], [230, 64], [230, 92], [216, 100], [200, 92]], { close: 1, fill: c.grayM, c: c.ink, w: 1.6 });
      s += FIG.poly([[200, 144], [230, 144], [230, 116], [216, 108], [200, 116]], { close: 1, fill: c.grayM, c: c.ink, w: 1.6 });
      for (i = 0; i < 30; i++) s += dot(42 + (i * 37) % 150, 74 + (i * 23) % 62, 3, c.orange);
      for (i = 0; i < 10; i++) s += dot(246 + (i * 53) % 196, 76 + (i * 31) % 58, 3, c.blue);
      s += A(150, 104, 300, 104, { c: c.ink, w: 2.2 });
      s += T(115, 42, '압축가스', { b: 1 }) + T(340, 42, '팽창한 뒤', { b: 1 });
      s += S(216, 164, '좁은 구멍 · 단열 팽창', { c: c.ink, b: 1 });
      s += T(115, 196, '압력 높음', { size: 15 }) + T(340, 196, '압력 ↓ · 온도 ↓', { b: 1, c: c.blue, size: 17, ans: true });
      return FIG.svg(480, 220, s);
    });

  add('p2-cryo-heat', 'p2c1', 91, '저온장치에서 열의 침입원인',
    '저온장치로 열이 새어 들어오는 길 다섯 가지',
    function () {
      var c = C(), s = '', i;
      s += FIG.box(30, 64, 170, 176, { fill: c.grayL, c: c.ink, r: 16, w: 2.2 });
      s += FIG.box(58, 96, 114, 112, { fill: c.blueL, c: c.blue, r: 12, w: 2 });
      [[44, 120], [186, 150], [44, 196], [186, 90], [110, 226], [150, 82], [44, 84], [186, 218]].forEach(function (p) { s += dot(p[0], p[1], 2.4, c.sub); });
      s += FIG.box(124, 30, 14, 66, { fill: '#fff', c: c.ink, r: 2, w: 1.6 });
      s += L(80, 96, 80, 44, { w: 2 }) + FIG.box(72, 32, 16, 12, { fill: c.redL, c: c.red, r: 2 });
      s += L(80, 208, 70, 240, { w: 4 }) + L(150, 208, 160, 240, { w: 4 });
      for (i = 0; i < 3; i++) s += FIG.path('M6,' + (110 + i * 40) + ' q5,-6 10,0 t10,0', { c: c.orange, w: 2 }) + A(26, 110 + i * 40, 30, 110 + i * 40, { c: c.orange, head: 7 });
      s += FIG.num(64, 22, '①') + FIG.num(70, 252, '②', { c: c.green }) + FIG.num(14, 88, '③', { c: c.orange }) + FIG.num(186, 126, '④', { c: c.purple }) + FIG.num(150, 22, '⑤', { c: c.ink });
      s += T(115, 152, '저온 액', { size: 14, b: 1, c: c.blue, halo: false });
      var list = [['①', '안전밸브·밸브 등의 열전도', c.blue], ['②', '지지요크 등의 열전도', c.green], ['③', '외면에서의 열복사', c.orange],
        ['④', '단열 공간에 남은\n가스분자의 열전도', c.purple], ['⑤', '연결배관 등의 열전도', c.ink]];
      list.forEach(function (k, j) {
        var y = 52 + j * 44;
        s += FIG.num(232, y, k[0], { c: k[2] }) + T(250, y, k[1], { a: 's', size: 14 });
      });
      return FIG.svg(480, 266, s);
    });

  add('p2-cryo-insul', 'p2c1', 91, '저온장치 단열법',
    '저온장치 단열법 — 단열 공간을 무엇으로 채우고, 얼마나 진공으로 만드는가',
    function () {
      var c = C(), s = '';
      s += L(140, 26, 464, 26, { c: c.sub, w: 1.4 }) + L(140, 26, 140, 34, { c: c.sub, w: 1.4 }) + L(464, 26, 464, 34, { c: c.sub, w: 1.4 });
      s += T(302, 14, '진공 단열법', { size: 14, b: 1, c: c.sub });
      var P = [['상압 단열법', '분말·섬유 단열재', '채움'], ['고진공 단열법', '10⁻³[Torr]', ''], ['분말진공 단열법', '10⁻²[Torr]', '펄라이트·규조토\nAl 분말'], ['다층진공 단열법', '10⁻⁵[Torr] 정도', 'Al 박 +\n글라스 울']];
      P.forEach(function (k, i) {
        var x = 12 + i * 116, j;
        s += FIG.box(x + 14, 40, 80, 118, { fill: i === 1 ? '#fff' : (i === 3 ? '#fff' : c.yellowL), c: 'none', r: 0 });
        if (i === 0 || i === 2) for (j = 0; j < 28; j++) s += dot(x + 20 + (j * 29) % 70, 48 + (j * 17) % 104, 2.2, c.orange);
        if (i === 3) for (j = 0; j < 7; j++) s += L(x + 22 + j * 10, 44, x + 22 + j * 10, 154, { c: j % 2 ? c.orange : c.sub, w: j % 2 ? 1 : 2 });
        s += L(x + 14, 40, x + 14, 158, { w: 4 }) + L(x + 94, 40, x + 94, 158, { c: c.blue, w: 4 });
        if (i > 0) s += S(x + 54, 100, i === 3 ? '' : '진공', { c: c.sub, b: 1, halo: i !== 2 });
        s += T(x + 54, 180, k[0], { size: 14, b: 1 });
        s += T(x + 54, 202, k[1], { size: 14, b: 1, c: c.blue, ans: i > 0 });
        if (k[2]) s += S(x + 54, k[2].indexOf('\n') >= 0 ? 230 : 222, k[2]);
      });
      s += S(116, 264, '■ 바깥 벽', { c: c.ink }) + S(250, 264, '■ 안쪽(저온) 벽', { c: c.blue });
      return FIG.svg(480, 278, s);
    });

  /* ════════════════ CHAPTER 02 가스설비 (p2c2) ════════════════ */

  add('p2-autoclave', 'p2c2', 93, '오토클레이브',
    '오토클레이브(고온·고압 반응 가마) — 내용물을 섞는 방식 4가지',
    function () {
      var c = C(), s = '';
      var cx = 62;
      s += FIG.box(cx - 30, 60, 60, 84, { fill: c.blueL, c: c.ink, r: 12, w: 2 }) + L(cx, 26, cx, 122, { w: 3 }) + L(cx - 16, 122, cx + 16, 122, { c: c.orange, w: 4 });
      s += FIG.box(cx - 9, 50, 18, 12, { fill: c.orangeL, c: c.orange, r: 2 });
      s += FIG.callout(cx + 9, 56, cx + 44, 30, '스타핑 박스', { a: 'm', size: 13 });
      cx = 182;
      s += FIG.box(cx - 42, 74, 84, 48, { fill: c.blueL, c: c.ink, r: 20, w: 2 }) + A(cx - 32, 140, cx + 32, 140, { both: true, c: c.orange, w: 2 });
      cx = 302;
      s += FIG.box(cx - 28, 62, 56, 78, { fill: c.blueL, c: c.ink, r: 12, w: 2 });
      s += FIG.path('M' + (cx + 38) + ',100 A38,38 0 1 1 ' + (cx + 22) + ',' + 69, { c: c.orange, w: 2 }) + A(cx + 22, 66, cx + 30, 74, { c: c.orange, head: 9 });
      cx = 422;
      s += FIG.box(cx - 12, 30, 24, 114, { fill: c.blueL, c: c.ink, r: 8, w: 2 });
      s += FIG.route([[cx, 130], [cx, 44]], { c: c.orange, w: 2, head: 8 }) + FIG.route([[cx + 14, 44], [cx + 26, 44], [cx + 26, 130], [cx + 14, 130]], { c: c.orange, w: 1.6, head: 8 });
      [['교반형', '교반기로 섞음', '누설 가능성 많음'], ['진탕형', '전체가 수평 왕복', '누설 가능성 적음'], ['회전형', '용기 자체가 회전', ''], ['가스교반형', '가늘고 긴 수직형', '유체가 순환']].forEach(function (k, i) {
        var x = 62 + i * 120;
        s += T(x, 172, k[0], { b: 1, ans: true }) + S(x, 194, k[1], { c: c.ink }) + (k[2] ? S(x, 212, k[2]) : '');
      });
      return FIG.svg(480, 228, s);
    });

  add('p2-c2h2-flow', 'p2c2', 96, '아세틸렌 제조장치',
    '아세틸렌 제조 순서 — 발생기에서 만든 C₂H₂ 를 식히고 거르고 압축해 다공물질 용기에 채운다',
    function () {
      var c = C(), s = '';
      var R = [[14, 40, '가스발생기', ['카바이드 + 물 → C₂H₂'], false, c.orangeL, c.orange], [172, 40, '쿨러', ['수분·암모니아 제거'], true, c.blueL, c.blue],
        [330, 40, '가스청정기', ['불순물 제거', '(에퓨렌·리카솔·카타리솔)'], true, c.blueL, c.blue],
        [330, 172, '아세틸렌 압축기', ['25[kg/cm²] 이상', '올리지 않는다'], false, c.grayL, c.ink], [172, 172, '역화방지기', ['물·모래·자갈·페로실리콘'], true, c.redL, c.red],
        [14, 172, '충전', ['다공물질 용기', '다공도 75[%] 이상', '92[%] 미만'], false, c.greenL, c.green]];
      R.forEach(function (k, i) {
        s += FIG.box(k[0], k[1], 136, 46, { fill: k[5], c: k[6] });
        s += T(k[0] + 68, k[1] + 23, k[2], { b: 1, c: k[6], halo: false, ans: k[4], size: 15 });
        k[3].forEach(function (t, j) { s += S(k[0] + 68, k[1] + 64 + j * 17, t, { c: c.ink }); });
        s += FIG.num(k[0] + 6, k[1] + 2, String(i + 1), { r: 10, size: 12, c: k[6] });
      });
      s += A(150, 63, 170, 63, { w: 2 }) + A(308, 63, 328, 63, { w: 2 });
      s += FIG.route([[466, 63], [474, 63], [474, 195], [468, 195]], { c: c.sub, w: 2, head: 9 });
      s += A(330, 195, 310, 195, { w: 2 }) + A(172, 195, 152, 195, { w: 2 });
      return FIG.svg(480, 286, s);
    });

  add('p2-c2h2-gen', 'p2c2', 96, '아세틸렌 제조장치',
    '아세틸렌 가스발생기 — 물과 카바이드를 만나게 하는 방법 3가지',
    function () {
      var c = C(), s = '';
      function chunks(x, y, n) { var r = ''; for (var i = 0; i < n; i++) r += FIG.box(x + (i % 4) * 16, y - Math.floor(i / 4) * 10, 13, 9, { fill: c.grayM, c: c.ink, r: 1, w: 1 }); return r; }
      var cx = 82;
      s += FIG.box(cx - 46, 56, 92, 100, { fill: '#fff', c: c.ink, r: 6, w: 2 });
      s += FIG.box(cx - 44, 138, 88, 16, { fill: c.blueL, c: 'none', r: 0 }) + chunks(cx - 32, 136, 8);
      s += A(cx, 30, cx, 104, { c: c.blue, w: 2.4 }) + S(cx + 8, 30, '물', { a: 's', c: c.blue, b: 1 });
      cx = 240;
      s += FIG.box(cx - 46, 56, 92, 100, { fill: '#fff', c: c.ink, r: 6, w: 2 });
      s += FIG.box(cx - 44, 116, 88, 38, { fill: c.blueL, c: 'none', r: 0 });
      s += L(cx, 56, cx, 92, { w: 1.4 }) + FIG.box(cx - 30, 92, 60, 32, { fill: 'none', c: c.sub, r: 2, w: 1.4 }) + chunks(cx - 28, 114, 8);
      s += A(cx + 56, 132, cx + 56, 100, { both: true, c: c.orange, head: 7, w: 1.4 });
      cx = 398;
      s += FIG.box(cx - 46, 56, 92, 100, { fill: '#fff', c: c.ink, r: 6, w: 2 });
      s += FIG.box(cx - 44, 84, 88, 70, { fill: c.blueL, c: 'none', r: 0 });
      s += chunks(cx - 32, 34, 4) + A(cx, 46, cx, 112, { c: c.ink, w: 2 }) + chunks(cx - 32, 150, 4);
      s += S(cx + 50, 30, '카바이드', { a: 'e', b: 1, c: c.ink });
      [['주수식', '카바이드에 물을 넣음', ''], ['침지식(접촉식)', '물과 카바이드를', '소량씩 접촉'], ['투입식', '물에 카바이드를 넣음', '대량생산 · 가장 많이 씀']].forEach(function (k, i) {
        var x = 82 + i * 158;
        s += T(x, 180, k[0], { b: 1, ans: true }) + S(x, 202, k[1], { c: c.ink }) + (k[2] ? S(x, 220, k[2]) : '');
      });
      return FIG.svg(480, 236, s);
    });

  add('p2-lpg-props', 'p2c2', 98, 'LP가스의 일반적인 특징',
    'LP가스(프로판·부탄)의 성질 — 기체는 공기보다 무겁고, 액체는 물보다 가볍다',
    function () {
      var c = C(), s = '';
      s += T(102, 34, '성질', { b: 1, c: c.sub, size: 14 }) + T(259, 34, '프로판 C₃H₈', { b: 1, c: c.blue }) + T(397, 34, '부탄 C₄H₁₀', { b: 1, c: c.orange });
      s += L(14, 52, 466, 52, { c: c.ink, w: 1.6 });
      var R = [['기체 비중 (공기 = 1)', '1.52', '2'], ['액체 비중 (물 = 1)', '0.51', '0.58'], ['기화하면 부피', '250배', '230배'],
        ['상압에서 액화 온도', '−42.1[℃]', '−0.5[℃]'], ['상온에서 액화 압력', '약 7[kg/cm²]', '약 2[kg/cm²]'], ['증발잠열[kcal/kg]', '101.8', '98.1']];
      R.forEach(function (k, i) {
        var y = 52 + i * 38;
        if (i % 2) s += FIG.box(14, y, 452, 38, { fill: c.grayL, c: 'none', r: 0 });
        s += T(24, y + 19, k[0], { a: 's', size: 14, halo: false });
        s += T(259, y + 19, k[1], { b: 1, size: 16, ans: true, halo: false }) + T(397, y + 19, k[2], { b: 1, size: 16, ans: true, halo: false });
      });
      s += L(190, 20, 190, 280, { c: c.edge, w: 1 }) + L(328, 20, 328, 280, { c: c.edge, w: 1 });
      return FIG.svg(480, 290, s);
    });

  add('p2-lpg-burn', 'p2c2', 99, 'LP가스의 연소 특성',
    'LP가스의 연소 — 태우는 데 공기가 많이 들고, 연소속도는 느린 편이다',
    function () {
      var c = C(), s = '', k = 280 / 31;
      s += T(14, 26, '1[m³] 를 태우는 데 필요한 양[m³]', { a: 's', b: 1, size: 14 });
      [['프로판', 5, 24, 52], ['부탄', 6.5, 31, 112]].forEach(function (g) {
        s += T(82, g[3] + 20, g[0], { a: 'e', b: 1 });
        s += FIG.box(92, g[3], g[1] * k, 18, { fill: c.blueL, c: c.blue, r: 2 }) + T(98 + g[1] * k, g[3] + 9, '산소 ' + g[1], { a: 's', size: 13, ans: true });
        s += FIG.box(92, g[3] + 22, g[2] * k, 18, { fill: c.grayM, c: c.ink, r: 2 }) + T(98 + g[2] * k, g[3] + 31, '공기 ' + g[2], { a: 's', size: 13, ans: true });
      });
      s += L(14, 164, 466, 164, { c: c.edge, w: 1 });
      s += T(14, 184, '연소속도[m/s] — 느릴수록 안전하다', { a: 's', b: 1, size: 14 });
      var v = 280 / 6.65;
      [['프로판', 4.45, 200], ['부탄', 3.65, 224], ['메탄', 6.65, 248]].forEach(function (g) {
        s += T(82, g[2] + 8, g[0], { a: 'e', size: 14 });
        s += FIG.box(92, g[2], g[1] * v, 16, { fill: g[0] === '메탄' ? c.grayL : c.orangeL, c: g[0] === '메탄' ? c.sub : c.orange, r: 2 });
        s += T(98 + g[1] * v, g[2] + 8, String(g[1]), { a: 's', size: 13, b: 1, ans: true });
      });
      return FIG.svg(480, 270, s);
    });

  add('p2-lpg-supply', 'p2c2', 102, 'LP가스 공급방식',
    'LP가스 공급방식 — 자연기화와 강제기화(생가스·공기혼합·변성)',
    function () {
      var c = C(), s = '';
      s += T(14, 22, '자연기화방식', { a: 's', b: 1, c: c.green, size: 16, ans: true });
      s += FIG.box(28, 38, 40, 64, { fill: c.greenL, c: c.green, r: 14 });
      s += S(84, 50, '용기 안 LP가스가 대기의 열을 흡수해 기화', { a: 's', c: c.ink }) + S(84, 72, '기화능력에 한계 → 소량 소비에 알맞음', { a: 's', c: c.ink }) +
        S(84, 94, '가스 조성 변화 · 발열량 변화가 크다', { a: 's', c: c.ink });
      s += L(14, 118, 466, 118, { c: c.edge, w: 1.4 });
      s += T(14, 140, '강제기화방식', { a: 's', b: 1, c: c.orange, size: 16, ans: true });
      s += B(14, 182, 64, 44, '용기·\n탱크', { size: 13, fill: c.blueL, c: c.blue });
      s += A(78, 204, 98, 204, { w: 2 }) + B(98, 182, 64, 44, '기화기', { fill: c.orangeL, c: c.orange, b: 1 });
      s += brace(184, 204, [164, 208, 252]);
      [['생가스', '0[℃] 이하에서 재액화 쉬움 → 배관 보온', 164], ['공기 혼합가스', '재액화 방지 · 발열량 조절 (부탄 다량 소비)', 208], ['변성 가스', '촉매로 분해 → CH₄·H₂·CO 등 (특수 용도)', 252]].forEach(function (k) {
        s += T(198, k[2] - 9, k[0], { a: 's', b: 1, size: 15, ans: true }) + S(198, k[2] + 10, k[1], { a: 's', c: c.ink });
      });
      return FIG.svg(480, 274, s);
    });

  add('p2-lpg-transfer', 'p2c2', 103, 'LP가스 이송설비',
    'LP가스 이송 — 펌프는 액 라인에서 액을 밀고, 압축기는 기상 가스로 탱크로리를 눌러 액을 보낸다',
    function () {
      var c = C(), s = '';
      s += FIG.box(20, 84, 150, 66, { fill: c.blueL, c: c.blue, r: 30, w: 2 }) + circ(50, 162, 11, { fill: c.ink }) + circ(140, 162, 11, { fill: c.ink });
      s += L(30, 122, 160, 122, { c: c.blue, w: 1, dash: '5 4' }) + T(95, 104, '탱크로리', { b: 1, halo: false });
      s += FIG.box(310, 84, 150, 66, { fill: c.blueL, c: c.blue, r: 30, w: 2 }) + L(320, 122, 450, 122, { c: c.blue, w: 1, dash: '5 4' }) + T(385, 104, '저장탱크', { b: 1, halo: false });
      s += L(385, 150, 385, 170, { w: 2 }) + L(330, 170, 440, 170, { c: c.sub, w: 1.4 });
      s += FIG.route([[95, 150], [95, 208], [226, 208]], { c: c.blue, w: 2.4, head: 9 }) + FIG.route([[254, 208], [400, 208], [400, 152]], { c: c.blue, w: 2.4, head: 9 });
      s += circ(240, 208, 14, { fill: '#fff', c: c.blue, w: 2, label: 'P', size: 14 });
      s += FIG.route([[370, 84], [370, 50], [262, 50]], { c: c.orange, w: 2.4, head: 9 }) + FIG.route([[218, 50], [110, 50], [110, 82]], { c: c.orange, w: 2.4, head: 9 });
      s += B(218, 36, 44, 28, '', { fill: c.orangeL, c: c.orange }) + T(240, 50, 'C', { b: 1, c: c.orange, size: 14, halo: false });
      s += T(240, 22, '압축기 — 기상(베이퍼) 라인', { size: 14, b: 1, c: c.orange, ans: true });
      s += T(240, 232, '펌프 — 액 라인', { size: 14, b: 1, c: c.blue, ans: true });
      s += S(240, 258, '압축기를 쓰면 이송시간이 짧고 · 베이퍼 록이 없고 · 잔가스 회수가 쉽다', { c: c.ink });
      return FIG.svg(480, 272, s);
    });

  add('p2-regulator', 'p2c2', 105, '조정기',
    '조정기의 감압방식 — 1단 감압과 2단 감압 (조정압력은 교재 표의 값)',
    function () {
      var c = C(), s = '';
      function cyl(x, y) { return FIG.box(x, y, 30, 44, { fill: c.blueL, c: c.blue, r: 10 }) + L(x + 15, y, x + 15, y - 8, { c: c.blue, w: 2.4 }); }
      s += T(14, 24, '1단 감압', { a: 's', b: 1, size: 16 });
      s += cyl(14, 48) + A(44, 70, 70, 70, { w: 2 }) + B(70, 50, 150, 40, '1단 감압식\n저압 조정기', { size: 13, fill: c.greenL, c: c.green });
      s += A(220, 70, 366, 70, { w: 2 }) + T(293, 56, '2.30~3.30[kPa]', { size: 14, b: 1, c: c.blue, ans: true });
      s += B(368, 50, 92, 40, '연소기', { b: 1 });
      s += S(240, 112, '조작·장치가 간단 · 최종 공급압력이 정확하기 어렵다', { c: c.ink });
      s += L(14, 130, 466, 130, { c: c.edge, w: 1.4 });
      s += T(14, 152, '2단 감압', { a: 's', b: 1, size: 16 });
      s += cyl(14, 176) + A(44, 198, 62, 198, { w: 2 }) + B(62, 178, 90, 40, '1차\n조정기', { size: 13, fill: c.greenL, c: c.green });
      s += A(152, 198, 230, 198, { w: 2 }) + T(191, 168, '57.0~83.0[kPa]', { size: 14, b: 1, c: c.orange, ans: true });
      s += B(230, 178, 90, 40, '2차\n조정기', { size: 13, fill: c.greenL, c: c.green });
      s += A(320, 198, 390, 198, { w: 2 }) + T(355, 168, '2.30~3.30[kPa]', { size: 14, b: 1, c: c.blue, ans: true });
      s += B(390, 178, 72, 40, '연소기', { b: 1 });
      s += S(240, 240, '공급압력이 안정적 · 중간 배관이 가늘어도 된다', { c: c.ink });
      return FIG.svg(480, 256, s);
    });

  add('p2-meter-class', 'p2c2', 109, '가스계량기(gas meter)',
    '가스계량기의 종류 — 실측식(건식·습식)과 추측식',
    function () {
      var c = C(), s = '';
      s += B(14, 104, 92, 38, '가스계량기', { b: 1, size: 14 });
      s += brace(120, 123, [62, 194]);
      s += B(130, 46, 70, 32, '실측식', { fill: c.blueL, c: c.blue, b: 1, ans: true }) + B(130, 178, 70, 32, '추측식', { fill: c.orangeL, c: c.orange, b: 1, ans: true });
      s += brace(214, 62, [44, 110]);
      s += T(228, 110, '습식', { a: 's', size: 15, b: 1 });
      s += T(228, 44, '건식', { a: 's', size: 15, b: 1 }) + brace(282, 44, [18, 62]);
      s += T(296, 18, '막식', { a: 's', size: 15, b: 1 }) + T(296, 38, '독립내기식 · 그로바식', { a: 's', size: 13, c: c.blue });
      s += T(296, 62, '회전식', { a: 's', size: 15, b: 1 }) + T(296, 82, '루츠식 · 로터리식 · 오발식', { a: 's', size: 13, c: c.blue });
      s += brace(214, 194, [178, 210]);
      s += T(228, 178, '오리피스식', { a: 's', size: 15 }) + T(228, 210, '터빈식 · 선근차식', { a: 's', size: 15 });
      s += L(14, 232, 466, 232, { c: c.edge, w: 1 });
      s += S(240, 250, 'LP가스에는 막식의 독립내기식을 많이 쓴다', { c: c.ink });
      return FIG.svg(480, 264, s);
    });

  add('p2-meter-install', 'p2c2', 110, '가스계량기(gas meter)',
    '가스계량기 설치기준 — 바닥에서의 높이와 다른 설비까지의 거리 (그림의 길이 비율은 실제와 다름)',
    function () {
      var c = C(), s = '';
      s += L(16, 262, 464, 262, { w: 2 }) + FIG.hatch(16, 262, 448, 10, { gap: 10, c: c.line });
      s += B(150, 96, 60, 88, '가스\n계량기', { size: 14, b: 1, fill: c.grayL });
      s += A(122, 186, 122, 260, { both: true, head: 8, w: 1.2, c: c.ink });
      s += T(114, 222, '1.6[m] 이상\n2[m] 이내', { a: 'e', size: 14, b: 1, c: c.blue, ans: true });
      s += flame(46, 160, 40, 14) + S(46, 176, '화기', { c: c.ink, b: 1 });
      s += A(64, 136, 146, 136, { both: true, head: 8, w: 1.2, c: c.red });
      s += T(102, 120, '2[m] 이상', { size: 13, b: 1, c: c.red, ans: true });
      [['전기계량기 · 전기개폐기', '60[cm] 이상', 108], ['전기점멸기 · 전기접속기', '30[cm] 이상', 140]].forEach(function (k) {
        s += B(322, k[2] - 13, 142, 26, k[0], { size: 13, fill: '#fff' });
        s += A(212, k[2], 320, k[2], { both: true, head: 8, w: 1.2, c: c.ink }) + T(266, k[2], k[1], { size: 13, b: 1, c: c.blue, ans: true });
      });
      s += FIG.path('M322,172 q8,-8 16,0 t16,0 t16,0 t16,0 t16,0 t16,0 t16,0 t16,0', { c: c.orange, w: 2.4 });
      s += S(392, 190, '절연조치 안 한 전선', { c: c.ink, b: 1 });
      s += A(212, 172, 320, 172, { both: true, head: 8, w: 1.2, c: c.ink }) + T(266, 172, '15[cm] 이상', { size: 13, b: 1, c: c.blue, ans: true });
      s += S(392, 222, '※ 단열조치 안 한 굴뚝도', { c: c.ink }) + S(392, 240, '30[cm] 이상');
      return FIG.svg(480, 280, s);
    });

  add('p2-bunsen', 'p2c2', 112, '연소방법',
    '분젠식 버너 — 1차 공기는 노즐 부근에서 빨아들여 섞고, 나머지 2차 공기는 불꽃 둘레에서 얻는다',
    function () {
      var c = C(), s = '';
      s += A(14, 140, 46, 140, { c: c.orange, w: 2.4 }) + S(24, 162, '가스', { c: c.orange, b: 1 });
      s += FIG.poly([[46, 130], [72, 134], [72, 146], [46, 150]], { close: 1, fill: c.grayM, c: c.ink, w: 1.6 });
      s += FIG.box(94, 124, 200, 32, { fill: c.yellowL, c: c.ink, r: 2, w: 2 });
      s += FIG.box(294, 112, 100, 56, { fill: c.yellowL, c: c.ink, r: 4, w: 2 });
      s += A(82, 92, 92, 120, { c: c.blue, w: 2 }) + A(82, 188, 92, 160, { c: c.blue, w: 2 });
      s += flame(318, 112, 52, 11, { fill: c.blueL, c: c.blue }) + flame(344, 112, 56, 11, { fill: c.blueL, c: c.blue }) + flame(370, 112, 52, 11, { fill: c.blueL, c: c.blue });
      s += A(278, 54, 304, 76, { c: c.green, w: 1.8 }) + A(410, 54, 384, 76, { c: c.green, w: 1.8 });
      s += FIG.callout(60, 132, 52, 108, '노즐', { a: 'e', b: 1 });
      s += T(84, 80, '1차 공기', { b: 1, c: c.blue, size: 15, ans: true });
      s += T(194, 140, '혼합관', { b: 1, halo: false });
      s += FIG.callout(344, 112, 430, 120, '염공', { a: 's', b: 1 });
      s += T(344, 34, '2차 공기', { b: 1, c: c.green, size: 15, ans: true });
      s += S(240, 206, '가스가 노즐에서 뿜어지는 힘으로 1차 공기를 빨아들인다', { c: c.ink });
      return FIG.svg(480, 222, s);
    });

  add('p2-burn-methods', 'p2c2', 112, '연소방법',
    '연소방법 4가지 — 연소에 필요한 공기를 어디서 얻느냐에 따른 구분 (온도는 교재 수치)',
    function () {
      var c = C(), s = '';
      var M = [['적화식', '1차 공기 없음', ['900[℃] 정도'], '역화 거의 없음', [58, 16, c.orangeL, c.orange]],
        ['세미 분젠식', '1차 공기 적게', ['1,000[℃] 정도'], '역화 우려 없음', [44, 14, c.blueL, c.blue]],
        ['분젠식', '1차 + 2차 공기', ['1,200[℃](제조가스)', '1,800[℃](천연가스)'], '역화 우려 있음', [34, 11, c.blueL, c.blue]],
        ['전1차 공기식', '공기 전부를 1차로', [], '바람에 잘 안 꺼짐', [24, 10, c.blueL, c.purple]]];
      M.forEach(function (k, i) {
        var cx = 62 + i * 118;
        if (i) s += L(cx - 59, 16, cx - 59, 250, { c: c.edge, w: 1 });
        s += FIG.box(cx - 22, 104, 44, 12, { fill: c.grayM, r: 2 });
        s += flame(cx, 104, k[4][0] * 1.4, k[4][1], { fill: k[4][2], c: k[4][3] });
        s += S(cx, 132, k[1], { c: c.ink, b: 1 });
        s += T(cx, 158, k[0], { b: 1, size: 15, ans: true });
        k[2].forEach(function (t, j) { s += S(cx, 182 + j * 17, t, { c: c.orange, b: 1 }); });
        s += S(cx, 236, k[3], { c: c.ink });
      });
      return FIG.svg(480, 252, s);
    });

  add('p2-lift-back', 'p2c2', 113, '연소의 이상현상',
    '연소의 이상현상 — 가스가 나오는 속도와 연소속도 중 어느 쪽이 큰가',
    function () {
      var c = C(), s = '';
      [[120, '선화(Lifting)', '가스 유출속도 > 연소속도', '불꽃이 염공을 떠나 공중에서 탐'], [360, '역화(Back fire)', '연소속도 > 가스 유출속도', '불꽃이 버너 안으로 들어감']].forEach(function (k, i) {
        var cx = k[0];
        s += FIG.box(cx - 36, 112, 72, 56, { fill: c.yellowL, c: c.ink, r: 4, w: 2 }) + L(cx - 8, 112, cx + 8, 112, { c: c.yellowL, w: 3 });
        s += A(cx, 190, cx, 170, { c: c.blue, w: 2 }) + S(cx + 8, 186, '가스', { a: 's', c: c.blue });
        if (i === 0) { s += flame(cx, 86, 56, 16, { fill: c.orangeL, c: c.orange }) + A(cx - 30, 100, cx - 30, 74, { c: c.blue, head: 7 }) + S(cx - 34, 106, '틈', { a: 'e', c: c.sub }); }
        else { s += flame(cx, 158, 40, 13, { fill: c.orangeL, c: c.orange }) + A(cx + 44, 100, cx + 44, 140, { c: c.red, head: 7 }); }
        s += T(cx, 216, k[1], { b: 1, size: 16, ans: true }) + S(cx, 238, k[2], { c: c.ink, b: 1 }) + S(cx, 256, k[3]);
      });
      s += L(240, 20, 240, 262, { c: c.edge, w: 1 });
      return FIG.svg(480, 270, s);
    });

  add('p2-flue', 'p2c2', 114, '급·배기 방식에 따른 연소기구의 분류',
    '연소기구 — 연소용 공기를 어디서 받고, 배기가스를 어디로 내보내느냐로 나눈다',
    function () {
      var c = C(), s = '';
      [['개방형', '실내', '실내'], ['반밀폐형', '실내', '실외'], ['밀폐형', '실외', '실외']].forEach(function (k, i) {
        var x = 10 + i * 156, wx = x + 106;
        if (i) s += L(x - 4, 14, x - 4, 226, { c: c.edge, w: 1 });
        s += FIG.box(wx, 30, 40, 112, { fill: c.blueL, c: 'none', r: 0 }) + L(wx, 30, wx, 142, { w: 4 });
        s += S(x + 54, 22, '실내') + S(wx + 20, 22, '실외', { c: c.blue, b: 1 });
        s += L(x + 6, 142, wx + 40, 142, { c: c.sub, w: 1.4 });
        s += FIG.box(x + 34, 104, 44, 38, { fill: c.grayL, c: c.ink, r: 4 }) + flame(x + 56, 126, 14, 6);
        if (i < 2) s += A(x + 8, 124, x + 32, 124, { c: c.green, w: 2, head: 8 });
        if (i === 0) s += FIG.path('M' + (x + 56) + ',102 C' + (x + 52) + ',84 ' + (x + 64) + ',76 ' + (x + 58) + ',58', { c: c.sub, w: 2 }) + A(x + 58, 62, x + 56, 48, { c: c.sub, head: 8 });
        if (i === 1) s += FIG.route([[x + 56, 104], [x + 56, 60], [wx + 34, 60]], { c: c.sub, w: 2, head: 8 });
        if (i === 2) { s += FIG.route([[wx + 36, 128], [x + 80, 128]], { c: c.green, w: 2, head: 8 }) + FIG.route([[x + 70, 104], [x + 70, 92], [wx + 36, 92]], { c: c.sub, w: 2, head: 8 }); }
        s += T(x + 72, 166, k[0], { b: 1, size: 16 });
        s += S(x + 46, 190, '공기', { c: c.green, b: 1 }) + T(x + 92, 190, k[1], { size: 14, b: 1, ans: true });
        s += S(x + 46, 212, '배기', { c: c.sub, b: 1 }) + T(x + 92, 212, k[2], { size: 14, b: 1, ans: true });
      });
      return FIG.svg(480, 230, s);
    });

  add('p2-city-process', 'p2c2', 118, '가스 공급방식',
    '도시가스가 수요가에 닿기까지 — 원료 → 제조 → 압송 → 저장 → 압력조정',
    function () {
      var c = C(), s = '';
      var K = [['원료', '석탄·나프타\nLNG·LPG', false], ['제조', '가스화·\n개질·정제', false], ['압송', '압축기', true], ['저장', '가스홀더', true], ['압력조정', '정압기', true], ['수요가', '공업·업무\n가정·상업', false]];
      K.forEach(function (k, i) {
        var x = 14 + i * 76;
        s += B(x, 50, 64, 44, k[0], { b: 1, size: k[0].length > 3 ? 13 : 15, fill: i === 5 ? c.greenL : c.blueL, c: i === 5 ? c.green : c.blue });
        if (i < 5) s += A(x + 64, 72, x + 76, 72, { w: 1.8, head: 7 });
        s += T(x + 32, 124, k[1], { size: 13, b: k[2] ? 1 : 0, c: k[2] ? c.orange : c.ink, ans: k[2] });
      });
      s += S(240, 176, '압송·저장·압력조정에 쓰는 설비가 무엇인지 짝지어 기억한다', { c: c.sub });
      return FIG.svg(480, 196, s);
    });

  add('p2-city-pressure', 'p2c2', 121, '가스 공급방식',
    '도시가스 공급압력의 구분 [MPa]',
    function () {
      var c = C(), s = '';
      s += S(30, 30, '일반 도시가스', { a: 's', c: c.ink, b: 1 });
      s += FIG.box(30, 42, 120, 40, { fill: c.greenL, c: c.green, r: 0, label: '저압', lc: c.green, b: 1 });
      s += FIG.box(150, 42, 170, 40, { fill: c.orangeL, c: c.orange, r: 0, label: '중압', lc: c.orange, b: 1 });
      s += FIG.box(320, 42, 140, 40, { fill: c.redL, c: c.red, r: 0, label: '고압', lc: c.red, b: 1 });
      s += T(150, 98, '0.1', { b: 1, ans: true }) + T(320, 98, '1', { b: 1, ans: true });
      s += S(30, 130, '액화가스가 기화되고 다른 물질과 혼합되지 않은 경우', { a: 's', c: c.ink, b: 1 });
      s += FIG.box(30, 142, 120, 40, { fill: c.greenL, c: c.green, r: 0, label: '저압', lc: c.green, b: 1 });
      s += FIG.box(150, 142, 170, 40, { fill: c.orangeL, c: c.orange, r: 0, label: '중압', lc: c.orange, b: 1 });
      s += T(150, 198, '0.01', { b: 1, ans: true }) + T(320, 198, '0.2', { b: 1, ans: true });
      s += S(394, 162, '고압 = 1 이상', { c: c.sub });
      s += S(466, 224, '[MPa] · 경계 숫자 이상은 오른쪽 칸, 미만은 왼쪽 칸', { a: 'e' });
      return FIG.svg(480, 236, s);
    });

  add('p2-gas-holder', 'p2c2', 122, '가스홀더(gas holder)',
    '가스홀더 — 제조량은 일정해도 수요는 출렁인다. 남을 때 모았다가 모자랄 때 내보낸다 (곡선은 예시)',
    function () {
      var c = C(), s = '', x0 = 50, y0 = 196, W = 400, yf = 122, n = 80, p = [];
      for (var i = 0; i <= n; i++) {
        var u = i / n, x = x0 + W * u;
        var d = 0.25 + 0.5 * Math.exp(-Math.pow((u - 0.32) / 0.1, 2)) + 0.6 * Math.exp(-Math.pow((u - 0.78) / 0.09, 2)) + 0.15 * Math.sin(u * 3);
        p.push([x, y0 - 150 * d]);
      }
      var up = p.map(function (q) { return [q[0], Math.min(q[1], yf)]; }), dn = p.map(function (q) { return [q[0], Math.max(q[1], yf)]; });
      s += FIG.path(pts2d(up) + ' L' + (x0 + W) + ',' + yf + ' L' + x0 + ',' + yf + ' Z', { fill: c.redL, c: 'none' });
      s += FIG.path(pts2d(dn) + ' L' + (x0 + W) + ',' + yf + ' L' + x0 + ',' + yf + ' Z', { fill: c.greenL, c: 'none' });
      s += axes(x0, y0, W + 14, 176, '하루(시간) →', '가스량');
      s += L(x0, yf, x0 + W, yf, { c: c.blue, w: 2, dash: '8 5' }) + T(x0 + W, yf - 12, '제조량(일정)', { a: 'e', size: 13, b: 1, c: c.blue });
      s += FIG.path(pts2d(p), { c: c.ink, w: 2.4 });
      s += T(178, 40, '수요량', { b: 1, size: 14 });
      s += T(178, 104, '홀더에서 내보냄', { size: 13, b: 1, c: c.red, ans: true });
      s += T(100, 156, '홀더에 모아 둠', { size: 13, b: 1, c: c.green, ans: true });
      s += S(240, 232, '종류 — 유수식 · 무수식 · 고압(구형) 홀더', { c: c.ink, b: 1 });
      return FIG.svg(480, 246, s);
    });

  add('p2-odorant', 'p2c2', 123, '부취제의 종류별 특성',
    '부취제 3가지 — 이름과 냄새, 특징',
    function () {
      var c = C(), s = '';
      var K = [['T.H.T', ['Tetra Hydro', 'Thiophene'], '석탄가스 냄새', ['파이프 산화', '저항력 강함']],
        ['T.B.M', ['Tertiary Butyl', 'Mercaptan'], '양파 썩는 냄새', ['적은 양으로도 감지', '토양 투과성 좋음']],
        ['D.M.S', ['DiMethyl', 'Sulfide'], '마늘 냄새', ['토양 투과성 가장 좋음', '파이프 산화 안 됨']]];
      K.forEach(function (k, i) {
        var x = 14 + i * 154, cx = x + 72;
        s += FIG.box(x, 14, 144, 206, { fill: '#fff', c: c.edge, r: 10, w: 2 }) + FIG.box(x, 14, 144, 76, { fill: c.purpleL, c: 'none', r: 10 });
        s += T(cx, 36, k[0], { b: 1, size: 19, c: c.purple, halo: false });
        s += S(cx, 60, k[1][0], { halo: false }) + S(cx, 76, k[1][1], { halo: false });
        s += S(cx, 108, '냄새');
        s += T(cx, 130, k[2], { b: 1, size: 15, c: c.orange, ans: true });
        s += S(cx, 170, k[3][0], { c: c.ink }) + S(cx, 190, k[3][1], { c: c.ink });
      });
      return FIG.svg(480, 232, s);
    });

  add('p2-odor-inject', 'p2c2', 124, '부취제 주입설비',
    '부취제 주입설비 — 액체 주입식과 증발식',
    function () {
      var c = C(), s = '';
      s += B(14, 96, 86, 44, '부취제\n주입설비', { size: 14, b: 1 });
      s += brace(114, 118, [56, 186]);
      s += B(124, 40, 92, 32, '액체 주입', { fill: c.blueL, c: c.blue, b: 1, ans: true }) + B(124, 170, 92, 32, '증발식', { fill: c.orangeL, c: c.orange, b: 1, ans: true });
      s += brace(230, 56, [20, 60, 100]);
      [['펌프 주입', '다이어프램 펌프 · 대규모에 알맞음', 20], ['적하 주입', '중력 낙하 · 유량변동 작은 소규모', 60], ['미터 연결 바이패스', '오리피스 차압 이용 · 대규모엔 부적합', 100]].forEach(function (k) {
        s += T(244, k[2] - 7, k[0], { a: 's', b: 1, size: 15 }) + S(244, k[2] + 11, k[1], { a: 's', c: c.ink });
      });
      s += brace(230, 186, [166, 206]);
      [['바이패스 증발', '부취제 증기를 가스 흐름에 섞음', 166], ['위크 증발', '심지(위크)로 증발 · 극히 소규모', 206]].forEach(function (k) {
        s += T(244, k[2] - 7, k[0], { a: 's', b: 1, size: 15 }) + S(244, k[2] + 11, k[1], { a: 's', c: c.ink });
      });
      return FIG.svg(480, 244, '<g transform="translate(0,14)">' + s + '</g>');
    });

  /* ═════════════ CHAPTER 03 측정기기 및 가스 분석 (p2c3) ═════════════ */

  add('p2-press-class', 'p2c3', 126, '압력계의 구분',
    '압력계의 구분 — 1차(직접 재는 것)와 2차(물질의 성질 변화를 이용하는 것)',
    function () {
      var c = C(), s = '';
      [[14, '1차 압력계', '압력을 직접 유도해 측정', ['액주식', '피스톤식 · 분동식'], c.blueL, c.blue],
        [246, '2차 압력계', '물질의 성질 변화를 이용', ['부르동관식 · 다이어프램식', '벨로우즈식 · 전기식', '피에조 전기 압력계'], c.orangeL, c.orange]].forEach(function (k) {
        var cx = k[0] + 110;
        s += FIG.box(k[0], 14, 220, 176, { fill: '#fff', c: k[5], r: 10, w: 2 }) + FIG.box(k[0], 14, 220, 40, { fill: k[4], c: 'none', r: 10 });
        s += T(cx, 34, k[1], { b: 1, size: 17, c: k[5], ans: true, halo: false });
        s += S(cx, 72, k[2], { c: c.ink });
        k[3].forEach(function (t, j) { s += T(cx, 108 + j * 28, t, { size: 15 }); });
      });
      return FIG.svg(480, 204, s);
    });

  add('p2-u-tube', 'p2c3', 127, '압력계',
    'U자관 압력계 — 양쪽 액면의 높이 차(h)로 압력을 잰다',
    function () {
      var c = C(), s = '';
      var U = 'M100,50 V190 A30,30 0 0 0 160,190 V50';
      s += FIG.path(U, { c: c.ink, w: 24 }) + FIG.path(U, { c: '#fff', w: 19 });
      s += FIG.path('M100,150 V190 A30,30 0 0 0 160,190 V100', { c: c.blueL, w: 19 }).replace('stroke-linecap="round"', 'stroke-linecap="butt"');
      s += A(100, 18, 100, 44, { c: c.red, w: 2 }) + T(108, 22, 'P₂ (측정압력)', { a: 's', size: 14, b: 1, c: c.red });
      s += A(160, 60, 160, 92, { c: c.sub, w: 1.6, head: 8 }) + T(176, 62, 'P₁ (대기압)', { a: 's', size: 14, c: c.sub });
      s += L(160, 150, 206, 150, { c: c.sub, w: 1, dash: '4 3' }) + L(170, 100, 206, 100, { c: c.sub, w: 1, dash: '4 3' });
      s += A(198, 102, 198, 148, { both: true, head: 7, w: 1.2, c: c.ink }) + T(208, 125, 'h', { a: 's', b: 1, size: 17 });
      s += FIG.box(250, 70, 216, 140, { fill: c.blueL, c: c.blue });
      s += T(358, 100, 'P₂ = ρh + P₁', { b: 1, size: 21, c: c.blue, halo: false });
      s += S(358, 130, '(압력 P = ρh)', { c: c.ink, halo: false }) + S(358, 156, 'ρ : 비중 · h : 높이 차', { c: c.ink, halo: false }) + S(358, 180, 'P₁ : 대기압 · P₂ : 측정압력', { c: c.ink, halo: false });
      return FIG.svg(480, 240, s);
    });

  add('p2-bourdon', 'p2c3', 127, '압력계',
    '부르동관 압력계 — 압력이 들어오면 C자 모양 관이 펴지고, 그 움직임이 지침을 돌린다',
    function () {
      var c = C(), s = '', cx = 150, cy = 118;
      s += circ(cx, cy, 98, { fill: '#fff', c: c.ink, w: 2.4 });
      for (var i = 0; i <= 10; i++) { var a = (135 + i * 27) * Math.PI / 180; s += L(cx + 86 * Math.cos(a), cy + 86 * Math.sin(a), cx + 94 * Math.cos(a), cy + 94 * Math.sin(a), { w: 1.4 }); }
      s += FIG.box(cx - 14, 206, 28, 34, { fill: c.grayM, c: c.ink, r: 2 });
      var tube = 'M' + (cx - 6) + ',206 L' + (cx - 6) + ',190 A62,62 0 1 1 ' + (cx + 52) + ',' + (cy + 40);
      s += FIG.path(tube, { c: c.orange, w: 9 }) + FIG.path(tube, { c: c.orangeL, w: 4 });
      s += L(cx + 52, cy + 40, cx + 14, cy + 14, { c: c.ink, w: 2 }) + circ(cx + 10, cy + 10, 8, { fill: c.grayL, c: c.ink, w: 1.4 });
      s += L(cx, cy, cx - 54, cy - 58, { c: c.red, w: 3.4 }) + circ(cx, cy, 6, { fill: c.ink });
      s += A(cx, 258, cx, 242, { c: c.blue, w: 2.4 });
      s += FIG.callout(cx + 64, cy - 30, 288, 40, '부르동관(C자 관)', { a: 's', b: 1 });
      s += FIG.callout(cx - 40, cy - 44, 288, 80, '지침', { a: 's', b: 1 });
      s += FIG.callout(cx + 30, cy + 26, 288, 150, '링크 · 기어', { a: 's', b: 1 });
      s += FIG.callout(cx + 4, 250, 288, 230, '압력 입구', { a: 's', b: 1 });
      s += S(300, 196, '압력 ↑ → 관이 펴짐\n→ 지침 회전', { a: 's', c: c.ink, b: 1 });
      return FIG.svg(480, 266, s);
    });

  add('p2-thermo-range', 'p2c3', 128, '온도계',
    '온도계의 측정 범위[℃] — 접촉식 온도계와 열전대 (교재 수치)',
    function () {
      var c = C(), s = '', X = function (t) { return 168 + (t + 200) * 290 / 1800; };
      var R = [['알코올', -100, 100, '−100~100', 0], ['수은', -35, 360, '−35~360', 0], ['바이메탈식', -50, 500, '−50~500', 0], ['전기저항', -200, 500, '−200~500', 0],
        ['CC 열전대', -180, 350, '−180~350', 1], ['IC 열전대', -20, 800, '−20~800', 1], ['CA 열전대', -20, 1200, '−20~1,200', 1], ['PR 열전대', 0, 1600, '0~1,600', 1]];
      [-200, 0, 500, 1000, 1500].forEach(function (t) { s += L(X(t), 22, X(t), 232, { c: c.edge, w: 1 }) + S(X(t), 246, { '-200': '−200', '0': '0', '500': '500', '1000': '1,000', '1500': '1,500' }[t]); });
      R.forEach(function (k, i) {
        var y = 30 + i * 26, col = k[4] ? c.orange : c.blue;
        s += T(14, y, k[0], { a: 's', size: 14, b: 1, c: col });
        s += T(160, y, k[3], { a: 'e', size: 13, ans: true });
        s += FIG.box(X(k[1]), y - 8, X(k[2]) - X(k[1]), 16, { fill: k[4] ? c.orangeL : c.blueL, c: col, r: 3, w: 1.4 });
      });
      return FIG.svg(480, 258, s);
    });

  add('p2-temp-color', 'p2c3', 129, '온도계',
    '고온 물체의 온도와 빛깔 — 색 온도계가 쓰는 관계',
    function () {
      var c = C(), s = '';
      var K = [['600', '어두운색', c.ink], ['800', '붉은색', c.red], ['1,000', '오렌지색', c.orange], ['1,200', '노란색', '#facc15'],
        ['1,500', '눈부신\n황백색', c.yellowL], ['2,000', '매우\n눈부신\n흰색', '#ffffff'], ['2,500', '푸른 기가\n있는 흰색', c.blueL]];
      K.forEach(function (k, i) {
        var x = 16 + i * 64;
        s += FIG.box(x, 46, 64, 44, { fill: k[2], c: c.sub, r: 0, w: 1 });
        s += T(x + 32, 30, k[0], { b: 1, size: 14 });
        s += T(x + 32, k[1].split('\n').length > 2 ? 130 : 120, k[1], { size: 13, ans: true });
      });
      s += S(466, 14, '[℃]', { a: 'e' });
      return FIG.svg(480, 170, s);
    });

  add('p2-continuity', 'p2c3', 131, '연속의 법칙',
    '연속의 법칙 — ①과 ②를 지나는 유량은 같다. 관이 가늘어지면 그만큼 빨라진다',
    function () {
      var c = C(), s = '';
      s += FIG.path('M30,50 H220 L260,70 H450 V110 H260 L220,130 H30 Z', { fill: c.blueL, c: c.blue, w: 2 });
      s += L(20, 90, 460, 90, { c: c.sub, w: 1, dash: 'center' });
      s += L(120, 40, 120, 140, { c: c.ink, w: 1, dash: '5 4' }) + L(360, 60, 360, 120, { c: c.ink, w: 1, dash: '5 4' });
      s += ell(120, 90, 9, 40, { c: c.blue, w: 1.4 }) + ell(360, 90, 6, 20, { c: c.blue, w: 1.4 });
      s += A(70, 76, 108, 76, { c: c.ink, w: 2 }) + A(300, 82, 350, 82, { c: c.ink, w: 2.4 });
      s += FIG.num(120, 28, '①') + FIG.num(360, 48, '②');
      s += T(88, 104, 'V₁', { b: 1 }) + T(136, 146, 'A₁ · D₁', { a: 's', size: 14 }) + T(316, 104, 'V₂', { b: 1 }) + T(372, 132, 'A₂ · D₂', { a: 's', size: 14 });
      s += T(240, 182, 'A₁V₁ = A₂V₂', { b: 1, size: 21, c: c.blue });
      s += T(240, 214, 'V₂ = (D₁ / D₂)² × V₁', { size: 16, b: 1 });
      return FIG.svg(480, 232, s);
    });

  add('p2-bernoulli', 'p2c3', 131, '베르누이 정리',
    '베르누이 정리 — 흐르는 유체의 위치·압력·속도 수두의 합(전수두)은 어디서나 같다',
    function () {
      var c = C(), s = '';
      var P = 'M40,196 C170,196 300,92 450,92';
      s += FIG.path(P, { c: c.blue, w: 46 }).replace('stroke-linecap="round"', 'stroke-linecap="butt"') + FIG.path(P, { c: c.blueL, w: 41 }).replace('stroke-linecap="round"', 'stroke-linecap="butt"');
      s += L(20, 248, 466, 248, { c: c.sub, w: 1.6 }) + S(466, 238, '기준면', { a: 'e' });
      s += A(80, 196, 112, 196, { c: c.ink, w: 2 }) + A(390, 92, 430, 92, { c: c.ink, w: 2.2 });
      s += FIG.num(96, 168, '①') + FIG.num(400, 62, '②');
      s += A(60, 246, 60, 198, { both: true, head: 7, w: 1.2, c: c.ink }) + T(52, 222, 'h₁', { a: 'e', b: 1 });
      s += A(462, 246, 462, 94, { both: true, head: 7, w: 1.2, c: c.ink }) + T(454, 170, 'h₂', { a: 'e', b: 1 });
      s += T(20, 30, 'H = h + P/γ + V²/2g', { a: 's', b: 1, size: 19, c: c.blue });
      s += T(20, 58, '위치수두 + 압력수두 + 속도수두', { a: 's', size: 14, ans: true });
      s += S(20, 82, '①과 ②에서 전수두 H 는 같다', { a: 's', c: c.ink });
      return FIG.svg(480, 262, s);
    });

  add('p2-dp-meters', 'p2c3', 132, '유량계',
    '차압식 유량계 — 조여진 곳 앞뒤의 압력 차로 유량을 잰다. 압력손실 순서에 주의',
    function () {
      var c = C(), s = '';
      function pipe(cx) { return L(cx - 70, 52, cx + 70, 52, { w: 2.4 }) + L(cx - 70, 112, cx + 70, 112, { w: 2.4 }) + A(cx - 66, 82, cx - 40, 82, { c: c.blue, head: 7 }); }
      var cx = 86;
      s += pipe(cx) + FIG.box(cx - 3, 52, 6, 20, { fill: c.ink, r: 0 }) + FIG.box(cx - 3, 92, 6, 20, { fill: c.ink, r: 0 });
      cx = 240;
      s += pipe(cx) + FIG.path('M' + (cx - 26) + ',52 Q' + (cx - 4) + ',54 ' + (cx + 2) + ',70 L' + (cx + 22) + ',70', { w: 3 }) + FIG.path('M' + (cx - 26) + ',112 Q' + (cx - 4) + ',110 ' + (cx + 2) + ',94 L' + (cx + 22) + ',94', { w: 3 });
      cx = 394;
      s += pipe(cx) + FIG.poly([[cx - 50, 52], [cx - 20, 70], [cx, 70], [cx + 66, 54]], { w: 3 }) + FIG.poly([[cx - 50, 112], [cx - 20, 94], [cx, 94], [cx + 66, 110]], { w: 3 });
      s += T(86, 140, '오리피스', { b: 1, ans: true }) + T(240, 140, '플로노즐', { b: 1, ans: true }) + T(394, 140, '벤투리', { b: 1, ans: true });
      s += S(86, 160, '설치 쉽고 값이 쌈') + S(240, 160, '고압 측정') + S(394, 160, '압력손실 적고 값이 비쌈');
      s += T(240, 22, '조여진 곳 앞뒤의 압력 차 → 유량', { size: 14, b: 1, c: c.sub });
      s += FIG.box(30, 182, 420, 38, { fill: c.yellowL, c: c.orange });
      s += T(240, 201, '압력손실이 큰 순서 : 오리피스 > 플로노즐 > 벤투리', { size: 15, b: 1, ans: true, halo: false });
      return FIG.svg(480, 232, s);
    });

  add('p2-pitot', 'p2c3', 133, '유량계',
    '피토관 유량계 — 전압과 정압의 차(H)로 유속을 구해 유량을 잰다',
    function () {
      var c = C(), s = '';
      s += FIG.box(20, 130, 440, 60, { fill: c.blueL, c: 'none', r: 0 }) + L(20, 130, 460, 130, { w: 2.4 }) + L(20, 190, 460, 190, { w: 2.4 });
      s += A(36, 168, 110, 168, { c: c.blue, w: 2.4 }) + T(70, 154, 'V', { b: 1, c: c.blue });
      s += FIG.box(164, 40, 12, 90, { fill: '#fff', c: c.ink, r: 0, w: 1.6 }) + FIG.box(165, 100, 10, 30, { fill: c.blue, c: 'none', r: 0 });
      s += FIG.path('M300,40 V156 H240', { c: c.ink, w: 12 }) + FIG.path('M300,40 V156 H240', { c: '#fff', w: 8 });
      s += FIG.path('M300,70 V156 H240', { c: c.blue, w: 8 });
      s += L(150, 100, 340, 100, { c: c.sub, w: 1, dash: '4 3' }) + L(290, 70, 340, 70, { c: c.sub, w: 1, dash: '4 3' });
      s += A(334, 72, 334, 98, { both: true, head: 7, w: 1.2, c: c.ink }) + T(344, 85, 'H', { a: 's', b: 1, size: 17 });
      s += T(170, 26, '정압', { b: 1, size: 15, ans: true }) + T(300, 26, '전압', { b: 1, size: 15, ans: true });
      s += S(240, 176, '전압 구멍은 흐름을 마주 본다', { c: c.ink, b: 1, halo: true });
      s += T(240, 222, 'Q = A × √(2gH)', { b: 1, size: 19, c: c.blue });
      s += S(400, 40, 'A : 단면적[m²]', { a: 'm', c: c.ink }) + S(400, 58, 'g : 중력가속도', { c: c.ink });
      return FIG.svg(480, 240, s);
    });

  add('p2-orsat', 'p2c3', 135, '가스분석계',
    '오르자트 가스분석계 — 흡수 순서와 흡수액',
    function () {
      var c = C(), s = '';
      s += T(240, 24, '시료 가스를 차례로 흡수시킨다', { b: 1, size: 15 });
      s += A(14, 100, 64, 100, { c: c.sub, w: 2 }) + S(36, 84, '시료', { c: c.ink });
      [['CO₂', 'KOH 30[%] 수용액', '', c.blueL, c.blue], ['O₂', '알칼리성', '피로갈롤 용액', c.greenL, c.green], ['CO', '암모니아성', '염화제1구리 용액', c.purpleL, c.purple]].forEach(function (k, i) {
        var cx = 110 + i * 130;
        s += FIG.box(cx - 40, 56, 80, 92, { fill: k[3], c: k[4], r: 30, w: 2 });
        s += FIG.num(cx, 50, ['①', '②', '③'][i], { c: k[4] }) + T(cx, 104, k[0], { b: 1, size: 21, c: k[4], halo: false });
        s += T(cx, 172, k[1], { size: 14, b: 1, ans: true }) + (k[2] ? T(cx, 192, k[2], { size: 14, b: 1, ans: true }) : '');
        if (i < 2) s += A(cx + 42, 100, cx + 88, 100, { c: c.sub, w: 2 });
      });
      s += S(240, 222, '흡수액 이름과 짝이 되는 가스를 함께 외운다', { c: c.sub });
      return FIG.svg(480, 236, s);
    });

  add('p2-gc', 'p2c3', 136, '가스분석계',
    '가스 크로마토그래피 — 캐리어 가스에 실린 시료가 분리관을 지나며 성분별로 나뉘어 검출기에 닿는다',
    function () {
      var c = C(), s = '';
      s += FIG.box(18, 56, 38, 84, { fill: c.blueL, c: c.blue, r: 14 }) + L(37, 56, 37, 44, { c: c.blue, w: 3 });
      s += S(37, 160, '캐리어 가스', { c: c.blue, b: 1 }) + S(37, 178, 'H₂ · N₂ · Ar');
      s += A(56, 98, 76, 98, { w: 2 }) + B(76, 78, 78, 40, '유량조절기\n· 압력계', { size: 13 });
      s += A(154, 98, 206, 98, { w: 2 });
      s += A(190, 38, 190, 92, { c: c.orange, w: 2 }) + T(190, 26, '시료 도입', { size: 14, b: 1, c: c.orange });
      s += FIG.box(206, 52, 110, 118, { fill: c.orangeL, c: c.orange, r: 6, w: 1.6 });
      var z = 'M212,98'; for (var i = 0; i < 6; i++) z += ' L' + (226 + i * 16) + ',' + (i % 2 ? 98 : 150) ;
      s += FIG.path(z + ' L310,98', { c: c.ink, w: 2.4 });
      s += S(261, 66, '항온조', { c: c.orange, b: 1, halo: false }) + S(261, 186, '분리관(컬럼)', { c: c.ink, b: 1 });
      s += A(316, 98, 336, 98, { w: 2 }) + B(336, 78, 62, 40, '검출기', { size: 14, b: 1, fill: c.greenL, c: c.green, ans: true });
      s += A(398, 98, 414, 98, { w: 2 }) + B(414, 78, 54, 40, '기록계', { size: 14 });
      s += S(240, 222, '기본 구성 — 캐리어 가스 · 시료 도입부 · 분리관 · 검출기', { c: c.ink });
      return FIG.svg(480, 236, s);
    });

  add('p2-analyzer-class', 'p2c3', 135, '가스분석계',
    '가스분석계의 종류 — 화학적 방법과 물리적 방법',
    function () {
      var c = C(), s = '';
      [[14, '화학적 가스분석계', ['오르자트 분석계', '연소식 O₂계', '자동화학식 CO₂계'], c.blueL, c.blue],
        [246, '물리적 가스분석계', ['열전도율법 · 밀도법', '적외선 흡수법 · 자화율법', '가스 크로마토그래피법'], c.orangeL, c.orange]].forEach(function (k) {
        var cx = k[0] + 110;
        s += FIG.box(k[0], 14, 220, 160, { fill: '#fff', c: k[4], r: 10, w: 2 }) + FIG.box(k[0], 14, 220, 40, { fill: k[3], c: 'none', r: 10 });
        s += T(cx, 34, k[1], { b: 1, size: 16, c: k[4], ans: true, halo: false });
        k[2].forEach(function (t, j) { s += T(cx, 82 + j * 32, t, { size: 15 }); });
      });
      return FIG.svg(480, 188, s);
    });
})();

/* ───── figs-p3.js ───── */
/* ══════════════════════════════════════════════════════════════
   가스기능사 — PART 03 가스 안전관리 그림 모음 (12번 칸 · 2026-11-27)
   공용 그리기 도우미 links/fig.js 를 쓴다. 형식은 _작업/가스기능사 전사/문항-형식.md 4번.

   - 책(140–249쪽)을 넘겨 보며 「배우기에 꼭 필요한 그림」을 골라 **새로 그렸다**.
     교재 그림을 잘라 쓰거나 따라 그리지 않았다. 수치는 책 본문·표에 있는 것만 넣었다
     (어느 쪽에서 읽었는지는 각 그림의 page, 자세한 메모는 _p3-메모.md).
   - heading = 책의 소제목 글자 그대로. 다만 9번 칸이 이미 묶어 쓴 카드 제목이 있으면
     그 제목을 따랐다(예: '충전용기 · 잔가스용기').
   - 정답이 되는 글자는 ans:true — 슬라이드·문제에서 FIG.svgOf(key,{labels:false}) 로 ? 가 된다.
   - 색은 FIG.C 만 쓴다. **예외 하나** — 용기 도색 그림(p3-cyl-color, p3-cyl-medical)은
     색 자체가 배울 내용이라 황색·갈색·자색을 따로 둔다(COL).
   ══════════════════════════════════════════════════════════════ */
window.GAS_FIGS_RAW = window.GAS_FIGS_RAW || [];
(function () {
  var F = window.FIG;
  if (!F) return;
  var C = F.C, t = F.t, box = F.box, line = F.line, arrow = F.arrow, callout = F.callout, poly = F.poly, path = F.path;

  function add(key, chap, page, heading, cap, draw) {
    window.GAS_FIGS_RAW.push({ key: key, chap: chap, page: page, heading: heading, cap: cap, draw: draw });
  }
  /* 가운데 맞춤 글자 · 보조 글자(13) */
  function T(x, y, s, o) { o = o || {}; if (o.a == null) o.a = 'm'; return t(x, y, s, o); }
  function S(x, y, s, o) { o = o || {}; o.size = o.size || 13; o.c = o.c || C.sub; if (o.a == null) o.a = 'm'; return t(x, y, s, o); }
  /* 세로 치수: 양쪽 화살표 + 가로로 읽는 글자 */
  function vdim(x, y1, y2, s, o) {
    o = o || {};
    return arrow(x, y1, x, y2, { c: o.c || C.ink, w: 1.2, head: 8, both: true }) +
      (s ? t(x + (o.dx == null ? 8 : o.dx), (y1 + y2) / 2, s, { size: o.size || 14, c: o.tc || C.ink, a: o.a || 's', b: o.b, ans: o.ans }) : '');
  }
  function hdim(x1, x2, y, s, o) {
    o = o || {};
    return arrow(x1, y, x2, y, { c: o.c || C.ink, w: 1.2, head: 8, both: true }) +
      (s ? T((x1 + x2) / 2, y + (o.dy == null ? -12 : o.dy), s, { size: o.size || 14, c: o.tc || C.ink, b: o.b, ans: o.ans }) : '');
  }
  /* 지면 — 선 + 짧은 빗금 */
  function ground(x1, x2, y) {
    var s = line(x1, y, x2, y, { c: C.ink, w: 2 });
    for (var x = x1 + 6; x < x2; x += 14) s += line(x, y, x - 8, y + 8, { c: C.sub, w: 1 });
    return s;
  }
  /* 세워 둔 가스 용기: (x,y)=밸브 위 왼쪽 기준, w 폭, h 전체 높이 */
  function cyl(x, y, w, h, fill, o) {
    o = o || {};
    var cx = x + w / 2, y1 = y + 14, y0 = y1 + w * 0.42, yb = y + h, r = Math.min(8, w / 5);
    var d = 'M' + x + ',' + y0 + ' L' + x + ',' + (yb - r) + ' Q' + x + ',' + yb + ' ' + (x + r) + ',' + yb +
      ' L' + (x + w - r) + ',' + yb + ' Q' + (x + w) + ',' + yb + ' ' + (x + w) + ',' + (yb - r) +
      ' L' + (x + w) + ',' + y0 + ' Q' + (x + w) + ',' + y1 + ' ' + cx + ',' + y1 + ' Q' + x + ',' + y1 + ' ' + x + ',' + y0 + ' Z';
    return box(cx - w * 0.14, y, w * 0.28, 15, { fill: C.grayM, c: C.ink, r: 3, w: 1.4 }) +
      path(d, { fill: fill || C.grayL, c: o.c || C.ink, w: 1.8 });
  }
  /* 누워 있는 용기(운반 그림) — 밸브가 dir 쪽(-1 왼쪽, 1 오른쪽) */
  function cylLying(x, y, w, h, dir, fill, label) {
    var vx = dir < 0 ? x - 12 : x + w;
    return box(x, y, w, h, { fill: fill, c: C.ink, r: h / 2, w: 1.8 }) +
      box(vx, y + h / 2 - 6, 12, 12, { fill: C.grayM, c: C.ink, r: 2, w: 1.4 }) +
      (label ? T(x + w / 2, y + h / 2, label, { size: 14, b: 1, halo: false }) : '');
  }
  function valve(cx, cy, o) { /* 나비 모양 밸브 기호 */
    o = o || {};
    var s = 11, c = o.c || C.ink;
    return poly([[cx - s, cy - s * 0.8], [cx + s, cy + s * 0.8], [cx + s, cy - s * 0.8], [cx - s, cy + s * 0.8]], { close: 1, fill: o.fill || '#fff', c: c, w: 1.8 });
  }
  var COL = { yellow: '#eab308', brown: '#92400e', purple: C.purple, white: '#ffffff', black: '#1f2937', gray: '#9ca3af', lgray: '#d1d5db' };
  window.GAS_P3_HELP = { T: T, S: S, vdim: vdim, hdim: hdim, ground: ground, cyl: cyl, cylLying: cylLying, valve: valve, COL: COL };

  /* ═══════════ CHAPTER 01 고압가스 안전관리법 (140–177) ═══════════ */

  add('p3-fill-ratio', 'p3c1', 141, '충전용기 · 잔가스용기',
    '충전 질량(또는 압력)이 2분의 1 이상이면 충전용기, 2분의 1 미만이면 잔가스용기 (채운 높이는 예시)',
    function () {
      var s = '';
      [[110, 100, '충전용기', '2분의 1 이상'], [280, 160, '잔가스용기', '2분의 1 미만']].forEach(function (k) {
        s += cyl(k[0], 28, 90, 160, '#fff');
        s += box(k[0] + 5, k[1], 80, 183 - k[1], { fill: C.blueL, c: 'none', r: 4 });
        s += T(k[0] + 45, 210, k[2], { b: 1, c: C.blue, ans: true }) + S(k[0] + 45, 232, k[3], { c: C.ink });
      });
      s += line(92, 135, 392, 135, { c: C.orange, w: 1.6, dash: '6 4' }) + T(240, 124, '1/2', { b: 1, c: C.orange });
      return F.svg(480, 250, s);
    });

  add('p3-protect-facility', 'p3c1', 144, '보호시설',
    '보호시설 — 사람이 많이 모이거나 지켜야 할 건물(1종)과 주택·작은 건물(2종)',
    function () {
      var s = T(240, 24, '고압가스 시설과 떨어져야 하는 건물', { size: 15, b: 1 });
      s += box(14, 44, 220, 212, { fill: C.blueL, c: C.blue }) + box(246, 44, 220, 212, { fill: C.greenL, c: C.green });
      s += T(124, 68, '제1종 보호시설', { b: 1, c: C.blue, halo: false }) + T(356, 68, '제2종 보호시설', { b: 1, c: C.green, halo: false });
      var a = [['학교·병원·교회·극장 등', 0], ['연면적 1,000[m²] 이상', 1], ['300명 이상 수용 건축물', 1], ['복지시설 20명 이상', 1], ['지정문화재 건축물', 0]];
      a.forEach(function (r, i) { s += t(28, 102 + i * 30, '· ' + r[0], { size: 14, halo: false, ans: !!r[1] }); });
      s += t(260, 102, '· 주택', { size: 14, halo: false });
      s += t(260, 132, '· 연면적', { size: 14, halo: false });
      s += t(274, 156, '100[m²] 이상', { size: 14, halo: false, ans: true }) + t(274, 180, '1,000[m²] 미만', { size: 14, halo: false, ans: true });
      return F.svg(480, 270, s);
    });

  add('p3-safety-distance', 'p3c1', 146, '안전거리',
    '처리설비·저장설비에서 제1종 보호시설까지의 안전거리 — 독성·가연성 > 산소 > 기타 (저장능력 단위: 압축 [m³] · 액화 [kg], 가연성 저온저장탱크는 따로 식)',
    function () {
      var x0 = 70, y0 = 216, xs = [100, 166, 232, 298, 364];
      function Y(m) { return y0 - m * 5.2; }
      var s = arrow(x0, y0, 420, y0, { c: C.sub, w: 1.4, head: 9 }) + arrow(x0, y0, x0, 34, { c: C.sub, w: 1.4, head: 9 });
      s += t(x0 + 8, 40, '1종 거리', { size: 13, c: C.sub });
      var ser = [[[17, 21, 24, 27, 30], C.red, '독성·가연성'], [[12, 14, 16, 18, 20], C.blue, '산소'], [[8, 9, 11, 13, 14], C.sub, '기타']];
      ser.forEach(function (r, k) {
        var pts = r[0].map(function (m, i) { return [xs[i], Y(m)]; });
        s += poly(pts, { c: r[1], w: 2.4 });
        pts.forEach(function (p) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + r[1] + '"/>'; });
        s += t(xs[0] - 12, Y(r[0][0]), r[0][0] + '', { size: 13, c: r[1], a: 'e', b: 1 });
        s += t(xs[4] + 12, Y(r[0][4]), r[0][4] + '[m]', { size: 14, c: r[1], b: 1, ans: true });
        s += line(150 + k * 110, 20, 172 + k * 110, 20, { c: r[1], w: 3 }) + t(178 + k * 110, 20, r[2], { size: 13, c: C.ink });
      });
      ['1만 이하', '1~2만', '2~3만', '3~4만', '4만 초과'].forEach(function (l, i) { s += S(xs[i], y0 + 16, l, { c: C.ink }); });
      s += S(240, y0 + 38, '저장능력 ([kg] 또는 [m³])');
      return F.svg(480, 266, s);
    });

  add('p3-hp-pipe-burial', 'p3c1', 148, '배관의 설치',
    '고압가스 배관을 땅에 묻을 때 — 매설 깊이와 다른 시설까지의 거리',
    function () {
      var s = ground(14, 466, 90);
      s += box(30, 30, 80, 60, { fill: C.grayL, c: C.ink, r: 2, label: '건축물', size: 14 });
      s += line(230, 60, 230, 156, { c: C.sub, w: 1, dash: '4 3' }) + hdim(110, 230, 60, '1.5[m] 이상', { dy: -14, ans: true });
      s += F.circle(230, 170, 14, { fill: C.orangeL, c: C.orange, w: 2 }) + S(230, 198, '배관', { c: C.orange, b: 1 });
      s += vdim(200, 90, 156, '', {}) + line(200, 156, 222, 156, { c: C.sub, w: 1, dash: '3 3' });
      s += t(192, 112, '산이나 들 1[m] 이상', { size: 14, a: 'e', ans: true }) + t(192, 136, '그 밖 1.2[m] 이상', { size: 14, a: 'e', ans: true });
      s += box(360, 150, 100, 66, { fill: C.grayL, c: C.ink, r: 2 }) + T(410, 172, '지하가', { size: 14, b: 1, halo: false }) + T(410, 194, '터널', { size: 14, b: 1, halo: false });
      s += hdim(244, 360, 170, '10[m] 이상', { dy: 18, ans: true });
      s += T(240, 238, '독성가스 배관 ↔ 수도시설 300[m] 이상', { size: 14, b: 1, c: C.red });
      s += S(240, 262, '그 밖의 지하 시설물과는 0.3[m] 이상', { c: C.ink });
      return F.svg(480, 280, s);
    });

  add('p3-ug-tank', 'p3c1', 150, '저장탱크',
    '저장탱크를 땅속에 묻을 때 — 방수 철근콘크리트 탱크실 안에 마른 모래를 채운다',
    function () {
      var s = ground(14, 466, 70);
      s += box(40, 70, 340, 180, { fill: C.grayM, c: C.ink, r: 0, w: 1.6 }) + box(56, 86, 308, 148, { fill: C.yellowL, c: C.ink, r: 0, w: 1 });
      for (var i = 0; i < 46; i++) { var px = 64 + (i * 37) % 292, py = 92 + (i * 53) % 136; s += '<circle cx="' + px + '" cy="' + py + '" r="1.6" fill="#b8a46a"/>'; }
      s += box(72, 140, 120, 72, { fill: '#fff', c: C.blue, r: 34, w: 2, label: '저장탱크', size: 14, lc: C.blue });
      s += box(228, 140, 120, 72, { fill: '#fff', c: C.blue, r: 34, w: 2, label: '저장탱크', size: 14, lc: C.blue });
      s += vdim(210, 70, 140, '', {}) + t(218, 108, '60[cm] 이상', { size: 14, ans: true });
      s += line(192, 222, 192, 246, { c: C.sub, w: 1 }) + line(228, 222, 228, 246, { c: C.sub, w: 1 }) + arrow(192, 240, 228, 240, { c: C.ink, w: 1.2, head: 7, both: true });
      s += T(210, 270, '탱크 사이 1[m] 이상', { size: 14, ans: true });
      s += line(330, 140, 330, 22, { c: C.ink, w: 3 }) + vdim(350, 70, 22, '', {}) + t(358, 38, '지면에서', { size: 13 }) + t(358, 56, '5[m] 이상', { size: 13, ans: true });
      s += t(322, 16, '안전밸브 방출구', { size: 13, a: 'e', c: C.sub });
      s += callout(372, 170, 392, 170, '벽 30[cm]', { size: 13, a: 's' }) + callout(356, 118, 392, 118, '마른 모래', { size: 13, a: 's' });
      s += t(20, 56, '지면', { size: 13, c: C.sub });
      return F.svg(480, 286, s);
    });

  add('p3-dike', 'p3c1', 151, '방류둑 설치',
    '방류둑 — 저장탱크에서 새어 나온 액화가스가 밖으로 퍼지지 않게 둘러싼 둑 (성토는 45° 이하·윗부분 폭 0.3[m] 이상, 출입구는 둘레 50[m]마다 1개 이상)',
    function () {
      var s = T(120, 24, '산소 · 가연성', { size: 14, b: 1 }) + T(120, 46, '1천 톤 이상', { size: 15, b: 1, c: C.red, ans: true });
      s += T(360, 24, '독성', { size: 14, b: 1 }) + T(360, 46, '5톤 이상', { size: 15, b: 1, c: C.red, ans: true });
      s += line(14, 230, 466, 230, { c: C.ink, w: 2 });
      s += box(170, 214, 140, 16, { fill: C.blueL, c: 'none', r: 0 });
      s += box(185, 104, 110, 126, { fill: '#fff', c: C.blue, w: 2, r: 12 }) + T(240, 152, '액화가스', { size: 14, b: 1, c: C.blue, halo: false }) + T(240, 174, '저장탱크', { size: 14, b: 1, c: C.blue, halo: false });
      s += poly([[30, 230], [90, 170], [110, 170], [170, 230]], { close: 1, fill: C.orangeL, c: C.orange, w: 2 });
      s += poly([[310, 230], [370, 170], [390, 170], [450, 230]], { close: 1, fill: C.orangeL, c: C.orange, w: 2 });
      s += path('M54,230 A24,24 0 0 0 47,213', { c: C.ink, w: 1.4 }) + t(52, 250, '45° 이하', { size: 14, a: 'm', ans: true });
      s += line(90, 170, 90, 150, { c: C.sub, w: 1 }) + line(110, 170, 110, 150, { c: C.sub, w: 1 }) + arrow(90, 156, 110, 156, { c: C.ink, w: 1.2, head: 6, both: true });
      s += T(100, 136, '윗부분 폭 0.3[m] 이상', { size: 13, ans: true });
      s += callout(398, 200, 420, 150, '방류둑', { size: 14, b: 1, a: 's', c: C.orange });
      s += callout(300, 222, 330, 258, '새어 나온 액', { size: 13, a: 's' });
      return F.svg(480, 276, s);
    });

  add('p3-barrier', 'p3c1', 154, '방호벽',
    '아세틸렌가스나 9.8[MPa] 이상 압축가스를 용기에 충전할 때 방호벽을 세우는 네 곳',
    function () {
      var s = T(240, 26, '아세틸렌 · 9.8[MPa] 이상 압축가스 충전 시', { size: 15, b: 1 });
      var A = [90, 90], B = [390, 90], Cc = [240, 186], D = [390, 240];
      s += box(30, 66, 120, 48, { fill: C.grayL, c: C.ink, label: '압축기', size: 15 });
      s += box(330, 62, 120, 56, { fill: C.grayL, c: C.ink }) + T(390, 80, '충전용기', { size: 14, b: 1, halo: false }) + T(390, 100, '보관장소', { size: 14, b: 1, halo: false });
      s += box(180, 162, 120, 48, { fill: C.blueL, c: C.blue, label: '충전장소', size: 15, lc: C.blue });
      s += box(330, 214, 120, 52, { fill: C.grayL, c: C.ink }) + T(390, 230, '충전용 주관밸브', { size: 13, b: 1, halo: false }) + T(390, 250, '조작밸브', { size: 13, b: 1, halo: false });
      function link(p, q) {
        var mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, ang = Math.atan2(q[1] - p[1], q[0] - p[0]), nx = -Math.sin(ang), ny = Math.cos(ang);
        return line(p[0], p[1], q[0], q[1], { c: C.sub, w: 1.2, dash: '4 4' }) +
          line(mx - nx * 16, my - ny * 16, mx + nx * 16, my + ny * 16, { c: C.red, w: 7 });
      }
      s += link([150, 90], [330, 90]) + link([130, 114], [210, 162]) + link([300, 172], [350, 118]) + link([300, 200], [330, 230]);
      s += line(30, 248, 56, 248, { c: C.red, w: 7 }) + t(64, 248, '방호벽', { size: 14, b: 1, c: C.red });
      s += t(30, 274, '높이 2[m] · 두께 12[cm] 이상 철근콘크리트', { size: 13, ans: true });
      return F.svg(480, 292, s);
    });

  add('p3-acetylene-fill', 'p3c1', 156, '아세틸렌의 충전',
    '아세틸렌 용기 속 — 다공물질에 용제를 스며들게 하고 그 안에 녹여 채운다',
    function () {
      var s = cyl(50, 24, 110, 236, '#fef3c7', { c: C.ink });
      for (var r = 0; r < 11; r++) for (var c = 0; c < 6; c++) {
        var px = 64 + c * 16 + (r % 2) * 8, py = 100 + r * 14;
        if (px < 152) s += '<circle cx="' + px + '" cy="' + py + '" r="3.2" fill="none" stroke="#a16207" stroke-width="1.2"/>';
      }
      var R = [[56, '다공물질', '다공도 75[%] 이상 92[%] 미만'], [116, '용제', '아세톤 또는 디메틸포름아미드'], [176, '충전 중 압력', '2.5[MPa] 이하'], [236, '충전 후', '15[℃]에서 1.5[MPa] 이하']];
      R.forEach(function (r, i) {
        s += t(200, r[0], r[1], { size: 15, b: 1, c: C.orange }) + t(200, r[0] + 22, r[2], { size: 14, ans: i !== 1 });
      });
      s += callout(140, 130, 192, 62, '', {}) + callout(120, 180, 192, 122, '', {});
      return F.svg(480, 276, s);
    });

  add('p3-cyl-color', 'p3c1', 171, '용기의 도색 및 표시',
    '공업용 고압가스 용기의 도색 — 의료용은 색이 다르다 (산소 녹색 · 액화탄산가스 청색 · 질소 회색은 「그 밖의 가스용기」 표)',
    function () {
      var g = [['액화석유가스', COL.lgray, '밝은 회색'], ['수소', C.orange, '주황색'], ['아세틸렌', COL.yellow, '황색'], ['액화암모니아', COL.white, '백색'],
        ['액화염소', COL.brown, '갈색'], ['산소', C.green, '녹색'], ['액화탄산가스', C.blue, '청색'], ['질소', COL.gray, '회색']];
      var s = '';
      g.forEach(function (r, i) {
        var col = i % 4, row = (i / 4) | 0, cx = 70 + col * 113, y = 16 + row * 150;
        s += cyl(cx - 22, y, 44, 86, r[1]);
        s += T(cx, y + 106, r[0], { size: 13, b: 1, ans: true }) + T(cx, y + 126, r[2], { size: 14, c: C.ink });
      });
      return F.svg(480, 306, s);
    });

  add('p3-cyl-medical', 'p3c1', 172, '의료용 가스용기',
    '같은 가스라도 의료용 용기는 색이 다르다 — 의료용은 위쪽에 폭 2[cm] 백색(산소는 녹색) 띠 두 줄',
    function () {
      var rows = [['산소', C.green, '녹색', COL.white, '백색'], ['액화탄산가스', C.blue, '청색', COL.gray, '회색'], ['질소', COL.gray, '회색', COL.black, '흑색'],
        ['헬륨', COL.gray, '회색', COL.brown, '갈색'], ['에틸렌', COL.gray, '회색', COL.purple, '자색'], ['아산화질소', COL.gray, '회색', C.blue, '청색']];
      var s = T(92, 26, '가스', { b: 1, c: C.sub }) + T(245, 26, '공업용', { b: 1, c: C.sub }) + T(393, 26, '의료용', { b: 1, c: C.blue });
      s += line(14, 42, 466, 42, { c: C.ink, w: 1.4 });
      rows.forEach(function (r, i) {
        var y = 64 + i * 36;
        s += T(92, y, r[0], { size: 15, b: 1 });
        s += box(205, y - 10, 26, 20, { fill: r[1], c: C.ink, r: 3, w: 1 }) + t(240, y, r[2], { size: 14 });
        s += '<g class="fig-ans">' + box(353, y - 10, 26, 20, { fill: r[3], c: C.ink, r: 3, w: 1 }) + '</g>' + t(388, y, r[4], { size: 14, b: 1, c: C.blue, ans: true });
        s += line(14, y + 18, 466, y + 18, { c: C.edge, w: 1 });
      });
      s += line(170, 42, 170, 262, { c: C.edge, w: 1 }) + line(320, 42, 320, 262, { c: C.edge, w: 1 });
      return F.svg(480, 274, s);
    });

  add('p3-cyl-stamp', 'p3c1', 171, '용기에 대한 표시',
    '용기 어깨에 새기는 기호 — 아세틸렌 용기의 TW 는 다공물질·용제·밸브까지 합한 질량, t 는 500[L] 넘는 용기만',
    function () {
      var s = cyl(30, 24, 140, 250, C.grayL);
      s += box(48, 74, 104, 30, { fill: '#fff', c: C.sub, r: 4, w: 1, dash: '4 3' }) + T(100, 89, 'V · W · TP · FP', { size: 13, b: 1, halo: false });
      s += callout(152, 89, 196, 89, '', {});
      var R = [['V', '내용적 [L]'], ['W', '용기 질량 [kg]'], ['TW', '아세틸렌 용기 질량 [kg]'], ['TP', '내압시험압력 [MPa]'], ['FP', '최고충전압력 [MPa]'], ['t', '동판 두께 [mm]']];
      R.forEach(function (r, i) {
        var y = 44 + i * 40;
        s += box(206, y - 15, 44, 30, { fill: C.blueL, c: C.blue, r: 6, label: r[0], size: 16, lc: C.blue });
        s += t(262, y, r[1], { size: 15, ans: true });
      });
      return F.svg(480, 290, s);
    });

  add('p3-load-rule', 'p3c1', 163, '적재 및 하역작업',
    '충전용기를 차에 실을 때 — 함께 싣지 못하는 짝과, 같이 실을 때 밸브 방향',
    function () {
      var s = T(240, 22, '한 차량에 함께 싣지 않는다', { size: 15, b: 1, c: C.red });
      s += box(40, 54, 110, 56, { fill: C.orangeL, c: COL.brown, label: '염소', size: 16, lc: COL.brown });
      s += '<circle cx="190" cy="82" r="20" fill="none" stroke="' + C.red + '" stroke-width="3"/>' + line(176, 68, 204, 96, { c: C.red, w: 3 }) + line(204, 68, 176, 96, { c: C.red, w: 3 });
      ['아세틸렌', '암모니아', '수소'].forEach(function (g, i) {
        s += box(234, 40 + i * 32, 120, 26, { fill: C.grayL, c: C.ink, r: 6 }) + T(294, 53 + i * 32, g, { size: 14, b: 1, halo: false, ans: true });
      });
      s += line(14, 146, 466, 146, { c: C.edge, w: 1.4 });
      s += T(200, 168, '가연성 + 산소를 같이 실을 때', { size: 14, b: 1 });
      s += box(40, 224, 320, 14, { fill: C.grayM, c: C.ink, r: 2 }) + box(360, 176, 80, 62, { fill: C.grayL, c: C.ink, r: 8 });
      [100, 300, 400].forEach(function (x) { s += F.circle(x, 248, 14, { fill: C.ink, c: C.ink }); });
      s += cylLying(74, 190, 116, 30, -1, C.redL, '가연성') + cylLying(214, 190, 116, 30, 1, C.greenL, '산소');
      s += arrow(60, 186, 34, 186, { c: C.orange, w: 2, head: 9 }) + arrow(344, 186, 370, 186, { c: C.orange, w: 2, head: 9 });
      s += T(240, 278, '밸브가 서로 마주 보지 않게', { size: 15, b: 1, c: C.orange, ans: true });
      return F.svg(480, 294, s);
    });

  add('p3-escort', 'p3c1', 164, '운반책임자 동승기준',
    '이 양 이상을 차에 싣고 운반하면 운반책임자가 함께 타야 한다 (독성은 허용농도 100만분의 200 기준으로 나뉨)',
    function () {
      var s = T(240, 22, '운반책임자 동승 — 이 양 이상일 때', { size: 15, b: 1 });
      var x1 = 200, x2 = 333, x3 = 466, y = 40;
      s += box(14, y, 452, 34, { fill: C.grayL, c: 'none', r: 6 });
      s += T(107, y + 17, '가스', { size: 14, b: 1, halo: false }) + T(266, y + 17, '압축가스', { size: 14, b: 1, halo: false }) + T(400, y + 17, '액화가스', { size: 14, b: 1, halo: false });
      var R = [['가연성', '', '300[m³]', '3,000[kg]', C.red], ['조연성', '', '600[m³]', '6,000[kg]', C.blue],
        ['독성', '200[ppm] 초과 5,000 이하', '100[m³]', '1,000[kg]', C.purple], ['독성', '200[ppm] 이하', '10[m³]', '100[kg]', C.purple]];
      R.forEach(function (r, i) {
        var yy = 74 + i * 46, cy = yy + 23;
        if (r[1]) { s += T(107, cy - 9, r[0], { size: 15, b: 1, c: r[4] }) + S(107, cy + 11, r[1]); }
        else s += T(107, cy, r[0], { size: 15, b: 1, c: r[4] });
        s += T(266, cy, r[2], { size: 16, b: 1, ans: true }) + T(400, cy, r[3], { size: 16, b: 1, ans: true });
        s += line(14, yy + 46, 466, yy + 46, { c: C.edge, w: 1 });
      });
      s += line(x1, 40, x1, 258, { c: C.edge, w: 1 }) + line(x2, 40, x2, 258, { c: C.edge, w: 1 });
      s += S(240, 276, '가연성 액화가스의 납붙임·접합용기는 2,000[kg]');
      return F.svg(480, 292, s);
    });

  /* (CHAPTER 02 · 03 · 04 는 아래에 이어서) */
})();

/* ═══════════ CHAPTER 02 액화석유가스 (178–202) · CHAPTER 03 도시가스사업법 (203–239) · CHAPTER 04 통합고시 (240–249) ═══════════
   (12번 칸 이어 그림 · 2026-11-27) 헬퍼는 위 IIFE 의 window.GAS_P3_HELP 를 그대로 쓴다. */
(function () {
  var F = window.FIG, H = window.GAS_P3_HELP;
  if (!F || !H) return;
  var C = F.C, t = F.t, box = F.box, line = F.line, arrow = F.arrow, callout = F.callout, poly = F.poly, path = F.path;
  var T = H.T, S = H.S, vdim = H.vdim, hdim = H.hdim, ground = H.ground, COL = H.COL;
  function add(key, chap, page, heading, cap, draw) {
    window.GAS_FIGS_RAW.push({ key: key, chap: chap, page: page, heading: heading, cap: cap, draw: draw });
  }
  /* 가로 막대 — rows: [이름, 값(m)] */
  function hbars(rows, o) {
    var s = '', x0 = o.x0 || 130, k = o.k || 7, y0 = o.y0 || 54, gap = o.gap || 32;
    rows.forEach(function (r, i) {
      var y = y0 + i * gap;
      s += t(x0 - 10, y, r[0], { size: 14, a: 'e' });
      s += box(x0, y - 10, r[1] * k, 20, { fill: o.fill || C.blueL, c: o.c || C.blue, r: 3, w: 1.4 });
      s += t(x0 + r[1] * k + 8, y, r[1] + '[m]', { size: 15, b: 1, c: o.c || C.blue, a: 's', ans: true });
    });
    return s;
  }
  /* 매설 깊이 기둥 — cols: [이름(\n 가능), 깊이(m)] , 1[m] = 100px */
  function depthCols(cols, y0, xs) {
    var s = '';
    cols.forEach(function (c, i) {
      var x = xs[i], d = c[1] * 100, yp = y0 + d;
      s += T(x, y0 - 28, c[0], { size: 13, b: 1 });
      s += line(x, y0, x, yp - 12, { c: C.sub, w: 1, dash: '3 3' }) + arrow(x - 22, y0, x - 22, yp - 12, { c: C.ink, w: 1.2, head: 7, both: true });
      s += line(x - 30, yp - 12, x - 10, yp - 12, { c: C.sub, w: 1 });
      s += F.circle(x, yp, 12, { fill: C.orangeL, c: C.orange, w: 2 });
      s += T(x, yp + 28, c[1] + '[m]', { size: 15, b: 1, ans: true });
    });
    return s;
  }

  /* ── CHAPTER 02 액화석유가스 ── */

  add('p3-lpg-fill-dist', 'p3c2', 182, '배치기준',
    'LPG 충전시설의 저장설비 — 저장능력이 클수록 사업소 경계까지 더 떨어진다 (지하에 묻으면 표의 0.7배 · 충전설비~사업소 경계는 24[m] 이상)',
    function () {
      var s = T(240, 22, '저장설비 바깥 면 ~ 사업소 경계', { size: 15, b: 1 });
      s += hbars([['10톤 이하', 24], ['10~20톤', 27], ['20~30톤', 30], ['30~40톤', 33], ['40~200톤', 36], ['200톤 초과', 39]], { x0: 120, k: 7.4, y0: 56 });
      s += S(240, 254, '저장능력이 클수록 더 멀리');
      return F.svg(480, 270, s);
    });

  add('p3-lpg-storage', 'p3c2', 189, '저장설비기준',
    '용기에 의한 LPG 실외저장소 — 경계 울타리와 20[m] 이상, 충전용기·잔가스용기 보관장소는 1.5[m] 이상 띄운다 (배치는 예시)',
    function () {
      var s = box(14, 44, 290, 196, { fill: '#fff', c: C.ink, r: 2, w: 2, dash: '8 5' }) + t(22, 30, '경계 울타리', { size: 13, c: C.sub, a: 's' });
      s += box(78, 92, 84, 84, { fill: C.blueL, c: C.blue }) + T(120, 124, '충전용기', { size: 14, b: 1, c: C.blue, halo: false }) + T(120, 144, '보관장소', { size: 13, c: C.blue, halo: false });
      s += box(192, 92, 84, 84, { fill: C.grayL, c: C.sub }) + T(234, 124, '잔가스용기', { size: 14, b: 1, halo: false }) + T(234, 144, '보관장소', { size: 13, halo: false });
      s += hdim(14, 78, 70, '20[m]', { dy: -12, ans: true }) + line(78, 62, 78, 92, { c: C.sub, w: 1, dash: '3 3' });
      s += line(162, 176, 162, 204, { c: C.sub, w: 1 }) + line(192, 176, 192, 204, { c: C.sub, w: 1 }) + hdim(162, 192, 198, '1.5[m] 이상', { dy: 20, ans: true });
      var R = [[60, '용기 단위 집적량', 1], [80, '30톤 이하', 0], [112, '통로 폭', 1], [132, '팰릿 2.5[m] 이상', 0], [152, '팰릿 없음 1.5[m] 이상', 0], [184, '쌓는 높이', 1], [204, '팰릿 5[m] 이하', 0], [224, '팰릿 없음 2단 이하', 0]];
      R.forEach(function (r) { s += t(318, r[0], r[1], { size: 13, b: r[2], c: r[2] ? C.orange : C.ink, a: 's', ans: !r[2] }); });
      return F.svg(480, 254, s);
    });

  add('p3-lpg-use-dist', 'p3c2', 194, '배치기준',
    'LPG 사용시설의 저장설비 — 저장능력에 따라 화기와의 우회거리가 달라진다 (주거용 시설은 2[m])',
    function () {
      var s = T(240, 22, '저장설비 ~ 화기 취급 장소 (우회거리)', { size: 15, b: 1 });
      s += hbars([['1톤 미만', 2], ['1톤 이상 3톤 미만', 5], ['3톤 이상', 8]], { x0: 160, k: 30, y0: 64, gap: 44, fill: C.orangeL, c: C.orange });
      s += S(240, 200, '저장설비가 2개 이상이면 설비마다 따로 거리를 둔다');
      return F.svg(480, 216, s);
    });

  add('p3-gas-meter', 'p3c2', 194, '배치기준',
    '가스계량기(30[m³/h] 미만) — 바닥에서 1.6[m] 이상 2[m] 이하에 달고, 주변 전기설비와 거리를 둔다 (격납상자 안이면 높이 제한 없음)',
    function () {
      var s = box(240, 24, 12, 256, { fill: C.grayM, c: C.ink, r: 0, w: 1.2 }) + ground(14, 252, 280) + t(20, 268, '바닥', { size: 13, c: C.sub, a: 's' });
      s += box(106, 80, 134, 40, { fill: C.yellowL, c: 'none', r: 0 });
      s += line(100, 80, 240, 80, { c: C.orange, w: 1.4, dash: '5 4' }) + line(100, 120, 240, 120, { c: C.orange, w: 1.4, dash: '5 4' });
      s += t(96, 80, '2[m] 이하', { size: 14, a: 'e', ans: true }) + t(96, 120, '1.6[m] 이상', { size: 14, a: 'e', ans: true });
      s += arrow(122, 280, 122, 120, { c: C.ink, w: 1.2, head: 8, both: true });
      s += line(196, 28, 196, 86, { c: C.orange, w: 5 }) + box(152, 86, 80, 30, { fill: '#fff', c: C.ink, r: 4, w: 1.8, label: '가스계량기', size: 13 });
      s += t(268, 34, '계량기와의 거리', { size: 15, b: 1, a: 's' });
      var R = [['전기계량기 · 전기개폐기', '60[cm] 이상'], ['전기점멸기 · 전기접속기', '30[cm] 이상'], ['단열조치 안 한 굴뚝', '30[cm] 이상'], ['절연조치 안 한 전선', '15[cm] 이상'], ['화기 (우회거리)', '2[m] 이상']];
      R.forEach(function (r, i) {
        var y = 70 + i * 46;
        s += t(268, y, r[0], { size: 13, a: 's', c: C.sub }) + t(268, y + 20, r[1], { size: 15, b: 1, a: 's', ans: true });
      });
      return F.svg(480, 300, s);
    });

  add('p3-small-tank', 'p3c2', 199, '소형 저장탱크의 설치거리',
    '소형 저장탱크(3톤 미만) — 충전질량이 클수록 가스충전구를 토지 경계선·건축물 개구부에서 더 멀리 둔다 (6기 이하 · 충전질량 합 5,000[kg] 미만)',
    function () {
      var xs = [14, 130, 242, 354, 466], cx = [72, 186, 298, 410];
      var s = box(14, 20, 452, 60, { fill: C.grayL, c: 'none', r: 6 });
      [['충전질량', '[kg]'], ['충전구 ~', '토지 경계선'], ['탱크', '사이'], ['충전구 ~', '건축물 개구부']].forEach(function (h, i) {
        s += T(cx[i], 40, h[0], { size: 13, b: 1, halo: false }) + T(cx[i], 60, h[1], { size: 13, b: 1, halo: false });
      });
      var R = [['1,000 미만', '0.5', '0.3', '0.5'], ['1,000~2,000 미만', '3.0', '0.5', '3.0'], ['2,000 이상', '5.5', '0.5', '3.5']];
      R.forEach(function (r, i) {
        var y = 104 + i * 44;
        s += T(cx[0], y, r[0], { size: 13, b: 1 });
        for (var j = 1; j < 4; j++) s += T(cx[j], y, r[j] + '[m] 이상', { size: 15, b: 1, c: C.blue, ans: true });
        s += line(14, y + 22, 466, y + 22, { c: C.edge, w: 1 });
      });
      for (var k = 1; k < 4; k++) s += line(xs[k], 20, xs[k], 214, { c: C.edge, w: 1 });
      s += S(240, 238, '1,000[kg] 이상은 방호벽을 세우면 직선거리를 2분의 1 이상으로', { c: C.ink });
      s += S(240, 260, '방호벽 높이는 탱크 정상부보다 50[cm] 이상 높게');
      return F.svg(480, 276, s);
    });

  /* ── CHAPTER 03 도시가스사업법 ── */

  add('p3-pressure-class', 'p3c3', 204, '고압·중압·저압',
    '도시가스의 압력 구분(게이지 압력) — 액화가스가 기화되고 다른 물질과 섞이지 않은 가스는 기준이 더 낮다 (막대 길이는 비율이 아님)',
    function () {
      var s = T(240, 22, '도시가스 압력 구분', { size: 15, b: 1 });
      function band(y, segs, ticks) {
        var o = '';
        segs.forEach(function (g) { o += box(g[0], y, g[1] - g[0], 40, { fill: g[3], c: g[4], r: 0, w: 1.6, label: g[2], size: 15, lc: g[4] }); });
        ticks.forEach(function (k) { o += line(k[0], y + 40, k[0], y + 50, { c: C.ink, w: 1.4 }) + T(k[0], y + 62, k[1], { size: 14, b: 1, ans: k[2] }); });
        return o;
      }
      s += t(40, 50, '일반', { size: 13, c: C.sub, a: 's' });
      s += band(62, [[40, 160, '저압', C.greenL, C.green], [160, 310, '중압', C.orangeL, C.orange], [310, 440, '고압', C.redL, C.red]], [[40, '0', 0], [160, '0.1[MPa]', 1], [310, '1[MPa]', 1]]);
      s += t(40, 154, '액화가스가 기화되고 다른 물질과 섞이지 않은 경우', { size: 13, c: C.sub, a: 's' });
      s += band(166, [[40, 160, '저압', C.greenL, C.green], [160, 310, '중압', C.orangeL, C.orange]], [[40, '0', 0], [160, '0.01[MPa]', 1], [310, '0.2[MPa]', 1]]);
      s += S(240, 262, '액체 상태의 액화가스는 고압으로 본다');
      return F.svg(480, 278, s);
    });

  add('p3-supply-line', 'p3c3', 203, '공급관·사용자공급관·내관',
    '일반도시가스 배관의 이름 — 어디서 어디까지인지로 나눈다 (계량기가 건물 안에 있으면 전단밸브 대신 건물 외벽까지)',
    function () {
      function node(x, w, y, lab, fill, c) { return box(x, y - 18, w, 36, { fill: fill || C.grayL, c: c || C.ink, label: lab, size: 14, lc: c || C.ink }); }
      function seg(x1, x2, y, lab, c) { return line(x1, y, x2, y, { c: c, w: 5 }) + T((x1 + x2) / 2, y - 22, lab, { size: 14, b: 1, c: c, ans: true }); }
      var y = 84, s = t(14, 28, '공동주택 등', { size: 15, b: 1, a: 's' });
      s += seg(74, 120, y, '본관', C.red) + seg(180, 300, y, '공급관', C.orange) + seg(350, 406, y, '내관', C.blue);
      s += node(14, 60, y, '제조소') + node(120, 60, y, '정압기', C.blueL, C.blue) + node(300, 50, y, '계량기') + node(406, 60, y, '연소기');
      s += line(270, 50, 270, 118, { c: C.green, w: 1.6, dash: '5 4' }) + t(264, 44, '토지 경계', { size: 13, c: C.green, a: 'e' });
      s += path('M270,108 L270,116 L298,116 L298,108', { c: C.green, w: 1.6 }) + T(284, 134, '사용자공급관', { size: 13, b: 1, c: C.green, ans: true });
      s += H.valve(287, 84, { c: C.ink }) + callout(287, 76, 330, 40, '전단밸브', { size: 13, a: 's' });
      y = 212; s += t(14, 166, '그 밖의 건축물', { size: 15, b: 1, a: 's' });
      s += seg(74, 120, y, '본관', C.red) + seg(180, 300, y, '공급관', C.orange) + seg(300, 406, y, '내관', C.blue);
      s += node(14, 60, y, '제조소') + node(120, 60, y, '정압기', C.blueL, C.blue) + node(406, 60, y, '연소기');
      s += line(300, 180, 300, 246, { c: C.green, w: 1.6, dash: '5 4' }) + T(300, 258, '토지 경계', { size: 13, c: C.green });
      return F.svg(480, 274, s);
    });

  add('p3-cg-burial', 'p3c3', 210, '배관을 매설하는 경우',
    '가스도매사업 배관의 매설 깊이 — 도로 밑 다른 시설물과는 0.3[m] 이상, 시가지 도로는 방호구조물 안이면 1.2[m]',
    function () {
      var y0 = 70, s = ground(14, 466, y0);
      s += depthCols([['산이나 들', 1], ['그 밖의 지역', 1.2], ['시가지 도로', 1.5], ['시가지 외\n도로', 1.2], ['철도 부지', 1.2]], y0, [62, 152, 242, 332, 422]);
      s += S(240, 272, '깊이 = 지면(노면)에서 배관 윗면까지 · 철도는 궤도 중심과 4[m] 이상', { c: C.ink });
      return F.svg(480, 288, s);
    });

  add('p3-cg-burial-road', 'p3c3', 220, '배관설비기준',
    '일반도시가스 제조소·공급소 밖 배관의 매설 깊이 — 도로가 넓을수록 깊게 (저압 배관 등의 예외는 배우기 글)',
    function () {
      var y0 = 70, s = ground(14, 466, y0);
      s += depthCols([['공동주택 등\n부지 안', 0.6], ['폭 8[m] 이상\n도로', 1.2], ['폭 4~8[m]\n도로', 1], ['그 밖의 곳', 0.8]], y0, [70, 180, 290, 400]);
      s += S(240, 246, '깊이 = 지면(노면)에서 배관 윗면까지', { c: C.ink });
      return F.svg(480, 262, s);
    });

  add('p3-pipe-color', 'p3c3', 211, '표시 기준',
    '도시가스 배관의 색 — 지상은 황색, 매설은 압력에 따라. 건물 벽에 드러난 배관은 황색 띠 두 줄로 대신할 수 있다',
    function () {
      var s = box(20, 30, 16, 140, { fill: C.grayM, c: C.ink, r: 0, w: 1.2 }) + ground(14, 466, 170);
      s += box(56, 40, 14, 130, { fill: C.grayL, c: C.ink, r: 2, w: 1.4 });
      s += box(51, 62, 24, 5, { fill: COL.yellow, c: C.ink, r: 0, w: 0.8 }) + box(51, 72, 24, 5, { fill: COL.yellow, c: C.ink, r: 0, w: 0.8 });
      s += vdim(96, 170, 70, '', {}) + t(104, 128, '1[m]', { size: 14, b: 1, a: 's', ans: true });
      s += callout(75, 66, 112, 40, '폭 3[cm] 황색 띠 2중', { size: 13, ans: true });
      s += box(190, 104, 130, 14, { fill: COL.yellow, c: C.ink, r: 7, w: 1.4 }) + line(220, 118, 220, 170, { c: C.sub, w: 2 }) + line(290, 118, 290, 170, { c: C.sub, w: 2 });
      s += T(255, 86, '지상배관', { size: 14, b: 1 }) + t(332, 111, '황색', { size: 15, b: 1, a: 's', ans: true });
      s += t(20, 196, '매설배관', { size: 14, b: 1, a: 's' });
      s += box(190, 206, 130, 16, { fill: COL.yellow, c: C.ink, r: 8, w: 1.4 }) + t(180, 214, '저압', { size: 14, b: 1, a: 'e' }) + t(332, 214, '황색', { size: 15, b: 1, a: 's', ans: true });
      s += box(190, 244, 130, 16, { fill: C.red, c: C.ink, r: 8, w: 1.4 }) + t(180, 252, '중압', { size: 14, b: 1, a: 'e' }) + t(332, 252, '적색', { size: 15, b: 1, a: 's', ans: true });
      return F.svg(480, 274, s);
    });

  add('p3-regulator-room', 'p3c3', 217, '환기설비',
    '정압기실 자연환기구 — 가스가 공기보다 무거우면 바닥 쪽, 가벼우면 천장 쪽에 낸다',
    function () {
      var s = box(120, 40, 240, 190, { fill: '#fff', c: C.ink, r: 0, w: 2.4 }) + ground(14, 466, 230);
      s += box(190, 156, 100, 52, { fill: C.blueL, c: C.blue, label: '정압기', size: 15, lc: C.blue });
      s += box(114, 204, 12, 26, { fill: C.orange, c: C.ink, r: 0, w: 1 }) + arrow(110, 217, 84, 217, { c: C.orange, w: 2, head: 8 });
      s += t(108, 170, '무거운 가스', { size: 14, b: 1, a: 'e' }) + t(108, 190, '바닥면에 접하게', { size: 13, a: 'e', ans: true });
      s += box(354, 46, 12, 22, { fill: C.blue, c: C.ink, r: 0, w: 1 }) + arrow(370, 57, 396, 57, { c: C.blue, w: 2, head: 8 });
      s += t(376, 98, '가벼운 가스', { size: 14, b: 1, a: 's' }) + t(376, 118, '천장·벽 위쪽', { size: 13, a: 's' }) + t(376, 138, '0.3[m] 이내', { size: 14, b: 1, a: 's', ans: true });
      s += T(240, 88, '정압기실', { size: 14, c: C.sub });
      s += t(40, 258, '통풍 면적', { size: 14, b: 1, a: 's' }) + t(130, 258, '바닥면적 1[m²]마다 300[cm²] 이상', { size: 14, a: 's', ans: true });
      s += t(40, 284, '환기구 1개', { size: 14, b: 1, a: 's' }) + t(130, 284, '2,400[cm²] 이하', { size: 14, a: 's', ans: true }) + t(262, 284, '· 2방향 이상으로 나눔', { size: 14, a: 's' });
      return F.svg(480, 300, s);
    });

  add('p3-excav-paint', 'p3c3', 228, '굴착공사 현장위치 표시 및 도시가스배관 매설위치 표시와 표시사실의 통지',
    '도로를 파기 전에 — 굴착 예정지역은 흰색, 그 아래 매설배관 위치는 배관 바로 위 지면에 황색 페인트로 표시한다 (위에서 본 모습)',
    function () {
      var s = box(14, 30, 452, 150, { fill: C.sub, c: C.ink, r: 4, w: 1.4 });
      s += box(60, 52, 230, 106, { fill: 'none', c: '#ffffff', r: 2, w: 4, dash: '12 7' });
      s += line(20, 120, 460, 120, { c: COL.yellow, w: 6, dash: '16 9' });
      s += T(175, 80, '굴착 예정지역', { size: 14, b: 1, c: '#ffffff', halo: false });
      s += T(388, 100, '매설배관 위치', { size: 13, b: 1, c: '#ffffff', halo: false });
      s += box(30, 198, 40, 18, { fill: '#ffffff', c: C.ink, r: 2, w: 1.2 }) + t(84, 207, '굴착공사 예정지역', { size: 14, b: 1, a: 's' }) + t(300, 207, '흰색 페인트', { size: 15, b: 1, a: 's', ans: true });
      s += box(30, 230, 40, 18, { fill: COL.yellow, c: C.ink, r: 2, w: 1.2 }) + t(84, 239, '매설배관 위치', { size: 14, b: 1, a: 's' }) + t(300, 239, '황색 페인트', { size: 15, b: 1, a: 's', ans: true });
      s += S(240, 270, '페인트가 어려우면 표시 말뚝 · 표시 깃발 · 표지판으로');
      return F.svg(480, 286, s);
    });

  add('p3-pile', 'p3c3', 231, '파일박기 및 빼기작업',
    '도시가스배관 가까이 파일을 박을 때 — 수평거리 2[m] 이내는 시험굴착으로 배관 위치를 확인하고, 30[cm] 이내는 박지 않는다 (단면, 크기는 예시)',
    function () {
      var y0 = 70, s = box(120, y0, 240, 140, { fill: C.orangeL, c: 'none', r: 0 }) + box(222, y0, 36, 140, { fill: C.redL, c: 'none', r: 0 });
      s += ground(14, 466, y0);
      [120, 360].forEach(function (x) { s += line(x, 30, x, 210, { c: C.orange, w: 1.2, dash: '5 4' }); });
      [222, 258].forEach(function (x) { s += line(x, y0, x, 210, { c: C.red, w: 1.2, dash: '4 3' }); });
      s += line(240, 30, 240, 176, { c: C.sub, w: 1, dash: '2 3' });
      s += F.circle(240, 190, 14, { fill: '#fff', c: C.ink, w: 2.4 }) + T(240, 222, '배관', { size: 13, b: 1 });
      s += hdim(240, 360, 44, '2[m] 이내', { dy: -14, ans: true });
      s += arrow(222, 140, 258, 140, { c: C.red, w: 1.2, head: 6, both: true }) + callout(258, 140, 300, 120, '30[cm]', { size: 14, b: 1, ans: true, c: C.red });
      s += box(36, 24, 64, 40, { fill: C.grayL, c: C.ink, label: '항타기', size: 13 }) + S(62, 102, '배관과 2[m] 이상', { c: C.ink, ans: true });
      s += T(240, 248, '붉은 칸 — 파일박기 금지', { size: 14, b: 1, c: C.red });
      s += T(240, 272, '주황 칸 — 시험굴착으로 배관 위치 확인', { size: 14, b: 1, c: C.orange });
      return F.svg(480, 288, s);
    });

  /* ── CHAPTER 04 통합고시 ── */

  add('p3-vehicle-sign', 'p3c4', 240, '경계표지',
    '고압가스 운반차량의 경계표지 — 차량 앞뒤에서 보이게 붉은 글씨로, 삼각기는 운전석 밖에 단다 (정사각형에 가까우면 면적 600[cm²] 이상)',
    function () {
      var s = box(30, 40, 310, 140, { fill: C.grayL, c: C.ink, r: 10, w: 2 });
      s += box(50, 180, 44, 24, { fill: C.ink, c: C.ink, r: 4 }) + box(276, 180, 44, 24, { fill: C.ink, c: C.ink, r: 4 });
      s += box(70, 96, 170, 40, { fill: '#ffffff', c: C.red, r: 2, w: 2 }) + T(155, 116, '위험 고압가스 · 독성가스', { size: 13, b: 1, c: C.red, halo: false });
      s += hdim(70, 240, 80, '차체 폭의 30[%] 이상', { dy: -14, ans: true, size: 13 });
      s += vdim(256, 96, 136, '', {}) + T(250, 158, '세로는 가로의 20[%] 이상', { size: 13, ans: true });
      s += hdim(30, 340, 222, '차체 폭', { dy: 14, size: 13 });
      s += line(370, 140, 370, 214, { c: C.ink, w: 2.4 }) + poly([[370, 150], [370, 210], [450, 180]], { close: 1, fill: C.red, c: C.ink, w: 1.4 });
      s += T(410, 136, '삼각기', { size: 14, b: 1 });
      s += T(410, 226, '30[cm] × 40[cm]', { size: 13 });
      s += T(424, 256, '적색 바탕', { size: 14, b: 1, ans: true }) + T(424, 276, '황색 글자', { size: 14, b: 1, ans: true });
      s += S(190, 262, '“위험 고압가스” · “독성가스” 표시');
      return F.svg(480, 290, s);
    });

  add('p3-toxic-sign', 'p3c4', 241, '독성가스의 식별조치 및 위험표시',
    '독성가스 시설의 두 가지 표지 — 바탕은 백색, 글씨는 흑색 (식별표지의 가스 명칭 ○○ 과 위험표지의 「주의」는 적색)',
    function () {
      var s = '';
      function sign(cx, title, html, rows) {
        var o = T(cx, 24, title, { size: 15, b: 1, c: C.blue });
        o += box(cx - 104, 42, 208, 56, { fill: '#ffffff', c: C.ink, r: 2, w: 2 });
        o += '<text x="' + cx + '" y="70" font-size="15" font-weight="700" fill="' + C.ink + '" text-anchor="middle" dominant-baseline="middle">' + html + '</text>';
        rows.forEach(function (r, i) {
          var y = 128 + i * 28;
          o += t(cx - 100, y, r[0], { size: 13, c: C.sub, a: 's' }) + t(cx + 100, y, r[1], { size: 15, b: 1, a: 'e', ans: r[2] });
        });
        return o;
      }
      var red = '<tspan fill="' + C.red + '">';
      s += sign(124, '식별표지', '독성가스(' + red + '○○</tspan>)제조시설', [['글자 크기', '10[cm] 이상', 1], ['알아볼 거리', '30[m] 이상', 1], ['바탕 · 글씨', '백색 · 흑색', 0]]);
      s += sign(356, '위험표지', '독성가스누설' + red + '주의</tspan>부분', [['글자 크기', '5[cm] 이상', 1], ['알아볼 거리', '10[m] 이상', 1], ['바탕 · 글씨', '백색 · 흑색', 0]]);
      s += line(240, 14, 240, 196, { c: C.edge, w: 1.2 });
      s += S(240, 214, '식별표지는 경계표지와 따로 게시한다');
      return F.svg(480, 230, s);
    });

  add('p3-backfill', 'p3c4', 248, '되메움 재료',
    '배관을 묻을 때 흙을 채우는 순서 — 기초재료 위에 배관, 배관 위 30[cm]까지 침상재료, 그 위에 되메움 재료. 다짐은 배관 상단부터 30[cm]마다 (단면, 크기는 예시)',
    function () {
      var s = box(150, 134, 180, 96, { fill: C.yellowL, c: 'none', r: 0 }) + box(150, 230, 180, 20, { fill: C.orangeL, c: 'none', r: 0 }) + box(150, 40, 180, 94, { fill: C.grayL, c: 'none', r: 0 });
      s += ground(14, 150, 40) + ground(330, 466, 40);
      s += line(150, 40, 150, 250, { c: C.ink, w: 2 }) + line(330, 40, 330, 250, { c: C.ink, w: 2 }) + line(150, 250, 330, 250, { c: C.ink, w: 2 });
      s += line(150, 134, 330, 134, { c: C.sub, w: 1, dash: '4 3' }) + line(150, 230, 330, 230, { c: C.sub, w: 1, dash: '4 3' });
      s += F.circle(240, 212, 18, { fill: '#fff', c: C.orange, w: 3 }) + line(258, 194, 360, 194, { c: C.sub, w: 1, dash: '3 3' });
      s += t(140, 87, '되메움 재료', { size: 14, b: 1, a: 'e', ans: true }) + t(140, 172, '침상재료', { size: 14, b: 1, a: 'e', ans: true }) + t(140, 240, '기초재료', { size: 14, b: 1, a: 'e', ans: true });
      s += vdim(356, 194, 134, '', {}) + t(366, 164, '배관 위 30[cm]', { size: 14, a: 's', ans: true });
      s += vdim(356, 230, 250, '', {}) + t(366, 240, '10[cm]', { size: 14, a: 's', ans: true });
      s += S(240, 274, '맨 아래층 — 모래 · 19[mm] 이상 큰 입자 없음 · 염분 0.04[%] 이하', { c: C.ink });
      s += S(240, 296, '가스용 PE관은 둘째 층을 배관 위 10[cm]까지');
      return F.svg(480, 310, s);
    });
})();

/* ───── window.FIGS 로 바꾸기 ───── */
var FIGS = window.FIGS = (function () {
  var o = {};
  (window.GAS_FIGS_RAW || []).forEach(function (f) {
    o[f.key] = { cap: f.cap, chap: f.chap, page: f.page, heading: f.heading,
                 cards: (f.cards && f.cards.length) ? f.cards : [f.heading], draw: f.draw };
  });
  return o;
})();
})();
/*@@END COPY@@*/

/*@@QFIG@@*/
window.QFIG = {
  'p1-hp-range': 'g15-5-12 g16-2-12 g19-1-25',
  'p1-gas-state': 'g15-1-34 g16-1-57 g19-3-07',
  'p1-flammability': 'g15-1-10 g15-2-12 g15-2-49 g16-2-24 g16-4-50 g17-1-15 g17-1-44 g18-1-18 g20-3-39 g20-3-51 g22-1-43 t-p1c1-01 t-p3c1-01',
  'p1-venn': 'g16-1-13 g19-1-26 t-p1c3-09 t-p1c3-10',
  'p1-boyle': 'g19-1-50',
  'p1-charles': 'g15-2-44 g15-2-48 g18-3-26 g19-3-58 g21-3-35',
  'p1-boyle-charles': 'g15-4-56 g15-4-58 g16-4-05 g18-3-18 g22-1-38',
  'p1-ideal-gas': 'g15-4-47 g16-2-59 g16-4-53 t-p1c1-02 t-p1c1-04',
  'p1-real-gas': 'g16-4-47 t-p1c1-03',
  'p1-dalton': 't-p1c1-05',
  'p1-fire-triangle': 'g15-1-38 g20-12-45',
  'p1-combustion-forms': 'g15-2-05',
  'p1-flash-point': 'g15-5-52 g16-4-55 g20-3-30 t-p1c2-01',
  'p1-flammable-range': 'g16-4-11 g18-1-20',
  'p1-safety-gap': 'g17-3-25 g20-3-28 g22-1-30',
  'p1-explosion-proof': 'g15-2-16 g16-1-12 g16-2-01 g18-3-33 g19-1-17 g20-12-30 t-p1c2-02',
  'p1-torricelli': 'g15-2-56 g15-4-55 g15-5-48 g16-4-58 g17-1-34 g17-1-43 g18-1-33 g18-3-16 g19-1-42 g19-3-51 g21-1-40 g22-1-36 g22-3-01 g22-3-33',
  'p1-abs-pressure': 'g16-1-48 g16-2-50 g18-1-36 g18-3-21 g18-3-28 g19-1-44 g20-12-33 g20-3-55 g21-1-45 g22-1-40 t-p1c2-03 t-p1c2-04',
  'p1-temp-scales': 'g15-1-03 g15-2-41 g15-4-54 g15-4-57 g16-1-47 g16-1-49 g16-2-57 g16-4-60 g19-3-04 t-p1c2-05 t-p1c2-06',
  'p1-water-heat': 'g15-1-11 g15-2-42 g16-2-48 g16-2-55 g16-4-52 g19-3-59 t-p1c2-08',
  'p1-thermo-laws': 'g15-2-46 g15-4-48 g18-1-45 g20-12-39 t-p1c2-10',
  'p1-mw-air': 'g15-2-47 g15-5-09 g15-5-46 g15-5-58 g19-1-33 g20-3-57',
  'p1-h2-electrolysis': 'g15-1-14 g15-1-27 g16-4-26 g17-1-40 g20-3-59 g22-1-35',
  'p1-acetylene': 'g15-1-50 g15-2-18 g15-5-55 g16-4-56 g17-1-28 g18-1-38 g19-1-43 g19-3-05 g19-3-11 g20-3-27 g22-1-03 t-p1c3-01',
  'p1-lpg': 'g15-5-29 g16-2-51 g17-3-16 g17-3-43 g19-1-34 g20-3-58 g21-3-21 g21-3-40 t-p1c3-04',
  'p1-flam-bars': 'g15-1-16 g15-5-47 g16-2-11 g16-4-30 g17-1-06 g17-3-10 g18-3-32 g18-3-57 g19-1-49 g21-1-23 g21-3-16 g22-1-15 t-p1c3-08',
  'p1-toxic-ppm': 'g15-1-20 g18-1-29',
  'p1-explosion-types': 'g15-2-36',
  'p2-vaporizer': 'g17-1-14 t-p2c1-01',
  'p2-vap-method': 'g16-2-34',
  'p2-gov-static': 'g16-4-42',
  'p2-steel-map': 'g15-1-22 g15-2-27 g17-1-46 g18-3-12 g20-12-57 g20-3-47 g21-1-46 t-p2c1-06 t-p2c1-07',
  'p2-sch': 't-p2c1-05',
  'p2-cyl-valve': 'g17-1-13 g21-3-49 g22-1-58 g22-3-46',
  'p2-comp-class': 'g15-4-40 g16-4-34 g17-3-60 g21-3-46 g21-3-56 g22-1-56 t-p2c1-10',
  'p2-blade': 'g16-4-37',
  'p2-pump-class': 'g17-1-53 g20-3-09 g21-3-50 g22-1-59 g22-3-55 t-p2c1-12',
  'p2-cavitation': 'g15-4-31 g17-3-56 g18-3-07 g19-3-57 g20-3-08 g21-3-53',
  'p2-cryo-heat': 'g15-5-41',
  'p2-cryo-insul': 'g15-1-43 g15-2-57 g17-3-58 g20-3-11',
  'p2-autoclave': 'g19-1-36 t-p2c2-01',
  'p2-c2h2-gen': 'g15-4-51 t-p2c2-02',
  'p2-lpg-props': 'g17-3-40 t-p1c3-05',
  'p2-lpg-burn': 'g15-1-01 g15-4-49 g16-2-56 g17-1-39 g17-3-32 g19-1-37 g20-12-37 g21-1-33 g21-3-42 g22-1-05 g22-1-34',
  'p2-lpg-supply': 'g15-4-35 g17-1-47 g19-3-02 g20-12-58 g21-1-48',
  'p2-lpg-transfer': 'g16-2-39 g17-1-04 g17-1-56 g20-12-49',
  'p2-regulator': 'g15-1-23',
  'p2-meter-class': 'g17-1-55 g21-3-57',
  'p2-burn-methods': 'g15-5-38 t-p2c2-07',
  'p2-lift-back': 'g16-1-58',
  'p2-flue': 'g20-3-23 t-p2c2-08',
  'p2-city-process': 'g15-5-44 t-p2c2-15',
  'p2-odorant': 'g16-2-58 g16-4-57 g21-3-48 g22-1-57 g22-3-47 t-p2c2-14',
  'p2-press-class': 'g16-4-38',
  'p2-u-tube': 'g16-1-42 g19-3-42',
  'p2-bourdon': 'g18-1-47 g21-1-54 g22-1-47',
  'p2-continuity': 'g18-1-46 g21-1-50 g22-3-48',
  'p2-bernoulli': 'g15-1-48',
  'p2-dp-meters': 'g15-1-21 g15-4-32 g16-1-35 t-p2c3-02',
  'p2-pitot': 'g17-1-48 g18-1-60 g20-12-59 g21-1-53 g21-3-55 g22-3-49',
  'p2-orsat': 'g15-4-43',
  'p2-gc': 't-p2c3-04',
  'p3-fill-ratio': 'g16-1-09 g19-3-27',
  'p3-protect-facility': 'g15-1-15 g17-1-23 g20-12-02 g20-3-18 g21-1-18 t-p3c1-03',
  'p3-safety-distance': 'g15-1-36 g17-3-01 g18-1-19 g21-1-03',
  'p3-hp-pipe-burial': 'g18-1-04 g19-1-12 g20-3-42',
  'p3-ug-tank': 'g15-5-02 g18-3-53 g20-3-17',
  'p3-dike': 'g18-1-02 g18-3-39 g21-1-44',
  'p3-barrier': 'g15-2-04 g16-1-20 g16-1-28 g17-1-18 g20-3-36 t-p3c3-11',
  'p3-acetylene-fill': 'g19-3-17 g20-12-10 g22-1-20 t-p2c2-04',
  'p3-cyl-color': 'g15-4-20 g15-5-27 g17-3-23 g21-3-28',
  'p3-cyl-medical': 'g18-1-09 t-p3c1-12',
  'p3-cyl-stamp': 'g18-3-38',
  'p3-load-rule': 'g15-1-60 g15-4-30 g16-2-29 g19-1-08 g20-12-11 g20-3-38 g22-1-21',
  'p3-escort': 'g15-2-15 g16-4-29 g19-1-05 g20-12-07 g21-1-26 t-p3c1-09',
  'p3-lpg-fill-dist': 't-p3c2-03',
  'p3-lpg-storage': 'g15-1-18 t-p3c2-05',
  'p3-lpg-use-dist': 'g17-1-17',
  'p3-gas-meter': 'g17-1-26 g20-12-01 g20-3-04 g21-1-15 g21-3-14 t-p2c2-06 t-p3c2-09 t-p3c3-08',
  'p3-small-tank': 't-p3c2-01',
  'p3-pressure-class': 'g16-2-35 g20-12-06 g21-1-25 g21-3-17 t-p2c2-11',
  'p3-supply-line': 'g15-1-59 t-p3c3-01',
  'p3-cg-burial': 'g15-5-21 g15-5-23 g17-3-17 g21-3-22',
  'p3-cg-burial-road': 'g15-4-26 g18-1-10',
  'p3-pipe-color': 'g15-1-19',
  'p3-regulator-room': 'g16-2-10',
  'p3-pile': 'g16-4-21 g18-3-58 g20-3-21',
  'p3-vehicle-sign': 'g16-2-07',
  'p3-toxic-sign': 'g17-3-14 g21-3-19 t-p3c4-01',
  'p3-backfill': 'g20-3-26 t-p3c4-04'
};
/*@@END QFIG@@*/
(function () {
  var by = {};
  Object.keys(window.QFIG).forEach(function (k) { window.QFIG[k].split(' ').forEach(function (i) { by[i] = k; }); });
  /* 문항 아이디 → 그림 키 (없으면 '') */
  window.figKeyOf = function (id) { return by[id] || ''; };
})();
