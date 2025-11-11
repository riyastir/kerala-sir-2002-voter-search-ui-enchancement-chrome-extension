
// === Injected dropdown enhancer (provided by user) ===
(() => {

  var mapTable;



  function unicode2ascii(strText, map) {
    //alert(strText);
    var chUnicode;
    var chAscii;
    var index;
    var lenChar;
    var bRepham = 0;
    var ascii_text = "";

    //mapTable=JSON.parse(karthikaJson);
    //alert(mapTable.map["ണ്ട"]);
    for (index = 0; index < strText.length;) {


      for (lenChar = 3; lenChar > 0; lenChar--) {
        chUnicode = strText.substring(index, index + lenChar);
        //alert (chUnicode);
        if (mapTable.map[chUnicode]) {
          chAscii = mapTable.map[chUnicode];
          if (chUnicode == "ൈ") {
            if (bRepham == 1) {
              bRepham = 0;
              ascii_text = ascii_text.substring(0, ascii_text.length - 2) + chAscii + ascii_text[ascii_text.length - 2] + ascii_text[ascii_text.length - 1];
            }
            else {
              ascii_text = ascii_text.substring(0, ascii_text.length - 1) + chAscii + ascii_text[ascii_text.length - 1];
            }


          } else if ((chUnicode == "ോ") || (chUnicode == "ൊ") || (chUnicode == "ൌ")) {
            if (bRepham == 1) {
              bRepham = 0;
              ascii_text = ascii_text.substring(0, ascii_text.length - 2) + chAscii[0] + ascii_text[ascii_text.length - 2] + ascii_text[ascii_text.length - 1] + chAscii[1];
            }
            else {
              //alert (chUnicode);
              //alert ("char0:"+chAscii[0]+" middlechar:"+ascii_text[ascii_text.length-1]+ " char1:"+chAscii[1]);
              ascii_text = ascii_text.substring(0, ascii_text.length - 1) + chAscii[0] + ascii_text[ascii_text.length - 1] + chAscii[1];
              //alert ("ascii_text(ഒ ഓ ഒ ഔ): "+ascii_text);						
            }

          }
          else if (chUnicode == "്യേ" || chUnicode == "്യെ") {
            //alert (chUnicode);
            bRepham = 0;
            //alert ("starting char:"+ascii_text[ascii_text.length-2]+"char0:"+chAscii[0]+" middlechar:"+ascii_text[ascii_text.length-1]+ " char1:"+chAscii[1]);
            ascii_text = ascii_text.substring(0, ascii_text.length - 1) + chAscii[0] + ascii_text[ascii_text.length - 1] + chAscii[1];
            //alert ("ascii_text(യേ യെ): "+ascii_text);
          }
          else if ((chUnicode == "െ") || (chUnicode == "േ") || (chUnicode == "്ര")) {
            //alert (chUnicode);

            //alert(" middlechar:"+ascii_text[ascii_text.length-2]+ " char1:"+chAscii[1]);
            if (bRepham == 1) {
              ascii_text = ascii_text.substring(0, ascii_text.length - 2) + chAscii[0] + ascii_text[ascii_text.length - 2] + ascii_text[ascii_text.length - 1];
              bRepham = 0;
            } else {
              ascii_text = ascii_text.substring(0, ascii_text.length - 1) + chAscii[0] + ascii_text[ascii_text.length - 1];
              //alert ("ascii_text (എ, ഏ, റ): "+ascii_text);
            }
            if (chUnicode == "്ര") {
              bRepham = 1;
            }
          }
          else {
            //alert (chUnicode);
            bRepham = 0;
            ascii_text = ascii_text + chAscii;
            //alert ("ascii_text (none): "+ascii_text);
          }
          index = index + lenChar;
          break;
        }
        else {

          if (lenChar == 1) {

            ascii_text = ascii_text + chUnicode;
            index++;
            bRepham = 0;
          }
          //alert(ascii_text);
        }
      }
      //console.log(ascii_text);
    }
    return ascii_text;
  }


  var mapTable = {
    "font": "karthika",
    "map": {
      "ം": "w",
      "ഃ": "x",
      "അ": "A",
      "ആ": "B",
      "ഇ": "C",
      "ഈ": "Cu",
      "ഉ": "D",
      "ഊ": "Du",
      "ഋ": "E",
      "ഌ": "p",
      "എ": "F",
      "ഏ": "G",
      "ഐ": "sF",
      "ഒ": "H",
      "ഓ": "Hm",
      "ഔ": "Hu",
      "ക": "I",
      "ഖ": "J",
      "ഗ": "K",
      "ഘ": "L",
      "ങ": "M",
      "ച": "N",
      "ഛ": "O",
      "ജ": "P",
      "ഝ": "Q",
      "ഞ": "R",
      "ട": "S",
      "ഠ": "T",
      "ഡ": "U",
      "ഢ": "V",
      "ണ": "W",
      "ത": "X",
      "ഥ": "Y",
      "ദ": "Z",
      "ധ": "[",
      "ന": "\\",
      "പ": "]",
      "ഫ": "^",
      "ബ": "_",
      "ഭ": "`",
      "മ": "a",
      "യ": "b",
      "ര": "c",
      "റ": "d",
      "ല": "e",
      "ള": "f",
      "ഴ": "g",
      "വ": "h",
      "ശ": "i",
      "ഷ": "j",
      "സ": "k",
      "ഹ": "l",
      "ാ": "m",
      "ി": "n",
      "ീ": "o",
      "ു": "p",
      "ൂ": "q",
      "ൃ": "r",
      "െ": "s",
      "േ": "t",
      "ൈ": "ss",
      "ൊ": "sm",
      "ോ": "tm",
      "ൌ": "su",
      "്‌": "v",
      "്": "v",
      "ൗ": "u",
      "്യേ": "ty",
      "്യെ": "sy",
      "ക്ക": "¡",
      "ക്ല": "¢",
      "ക്ഷ": "£",
      "ഗ്ഗ": "¤",
      "ഗ്ല": "¥",
      "ങ്ക": "¦",
      "ങ്ങ": "§",
      "ച്ച": "¨",
      "ഞ്ച": "©",
      "ഞ്ഞ": "ª",
      "ട്ട": "«",
      "ണ്‍": "¬",
      "ണ്ട": "ï",
      "ണ്ണ": "®",
      "ത്ത": "¯",
      "ത്ഥ": "°",
      "ദ്ദ": "±",
      "ദ്ധ": "²",
      "ന്‍": "³",
      "ൻ": "³",
      "ന്ത": "´",
      "ന്ദ": "µ",
      "ന്ന": "¶",
      "ന്മ": "·",
      "പ്പ": "¸",
      "പ്ല": "¹",
      "ബ്ബ": "º",
      "ബ്ല": "»",
      "മ്പ": "¼",
      "മ്മ": "½",
      "മ്ല": "Ÿ",
      "യ്യ": "¿",
      "ർ‌": "À",
      "ർ‍": "À",
      "ർ": "À",
      "ര്‍": "À",
      "റ്റ": "ä",
      "ല്‍": "Â",
      "ൽ": "Â",
      "ല്ല": "Ã",
      "ള്‍": "Ä",
      "ൾ": "Ä",
      "ള്ള": "Å",
      "വ്വ": "Æ",
      "ശ്ല": "Ç",
      "ശ്ശ": "È",
      "സ്ല": "É",
      "സ്സ": "Ê",
      "ഹ്ല": "Ë",
      "സ്റ്റ": "Ì",
      "ഡ്ഡ": "Í",
      "ക്ട": "Î",
      "ബ്ധ": "Ï",
      "ബ്ദ": "Ð",
      "ച്ഛ": "Ñ",
      "ഹ്മ": "Ò",
      "ഹ്ന": "Ó",
      "ന്ധ": "Ô",
      "ത്സ": "Õ",
      "ജ്ജ": "Ö",
      "ണ്മ": "×",
      "സ്ഥ": "Ø",
      "ന്ഥ": "Ù",
      "ജ്ഞ": "Ú",
      "ത്ഭ": "Û",
      "ഗ്മ": "Ü",
      "ശ്ച": "Ý",
      "ണ്ഡ": "Þ",
      "ത്മ": "ß",
      "ക്ത": "à",
      "ഗ്ന": "á",
      "ന്റ": "â",
      "ഷ്ട": "ã",
      "്യ": "y",
      "്വ": "z",
      "്ര": "{",
      "-": "þ"
    }
  };

  const ZWJ = /\u200D/g;
  const norm = s => (s || "").replace(ZWJ, "").toLowerCase().trim();

  // --- Simple Malayalam → Latin transliteration (for searching) ---
  // Covers common consonants, vowel signs, anusvara/visarga, virama.
  const CONS = {
    'ക': 'k', 'ഖ': 'kh', 'ഗ': 'g', 'ഘ': 'gh', 'ങ': 'ng',
    'ച': 'ch', 'ഛ': 'chh', 'ജ': 'j', 'ഝ': 'jh', 'ഞ': 'nj',
    'ട': 't', 'ഠ': 'th', 'ഡ': 'd', 'ഢ': 'dh', 'ണ': 'n',
    'ത': 'th', 'ഥ': 'thh', 'ദ': 'd', 'ധ': 'dhh', 'ന': 'n',
    'പ': 'p', 'ഫ': 'ph', 'ബ': 'b', 'ഭ': 'bh', 'മ': 'm',
    'യ': 'y', 'ര': 'r', 'ല': 'l', 'വ': 'v', 'ശ': 'sh',
    'ഷ': 'sh', 'സ': 's', 'ഹ': 'h', 'ള': 'l', 'ഴ': 'zh', 'റ': 'r'
  };
  const VOWEL = { // independent vowels
    'അ': 'a', 'ആ': 'aa', 'ഇ': 'i', 'ഈ': 'ee', 'ഉ': 'u', 'ഊ': 'oo', 'ഋ': 'ri',
    'എ': 'e', 'ഏ': 'ee', 'ഐ': 'ai', 'ഒ': 'o', 'ഓ': 'oo', 'ഔ': 'au', 'ഌ': 'li'
  };
  const MATRA = { // dependent vowel signs
    '\u0D3E': 'aa', // ാ
    '\u0D3F': 'i',  // ി
    '\u0D40': 'ee', // ീ
    '\u0D41': 'u',  // ു
    '\u0D42': 'oo', // ൂ
    '\u0D43': 'ri', // ൃ
    '\u0D46': 'e',  // െ
    '\u0D47': 'ee', // േ
    '\u0D48': 'ai', // ൈ
    '\u0D4A': 'o',  // ೊ
    '\u0D4B': 'oo', // ೋ
    '\u0D4C': 'au'  // ೌ
  };
  const VIRAMA = '\u0D4D';  // ്
  const ANUSVARA = '\u0D02';// ം
  const VISARGA = '\u0D03';// ഃ

  function romanizeML(s) {
    if (!s) return '';
    s = s.replace(ZWJ, '');
    let out = '';
    const chars = Array.from(s);
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i];

      // independent vowels
      if (VOWEL[ch]) { out += VOWEL[ch]; continue; }

      // consonant cluster handling
      if (CONS[ch]) {
        // lookahead for vowel sign / virama
        const next = chars[i + 1];
        if (next === VIRAMA) {
          out += CONS[ch]; // no inherent 'a'
          continue;
        }
        if (next && MATRA[next]) {
          out += CONS[ch] + MATRA[next];
          i++; // consumed matra
          continue;
        }
        // no matra & no virama -> inherent 'a'
        out += CONS[ch] + 'a';
        continue;
      }

      // vowel signs directly (rare in well-formed text), map anyway
      if (MATRA[ch]) { out += MATRA[ch]; continue; }

      // anusvara / visarga
      if (ch === ANUSVARA) { out += 'm'; continue; }
      if (ch === VISARGA) { out += 'h'; continue; }

      // space/punct/latin etc
      out += ch;
    }
    return out.toLowerCase();
  }

  function decodeLegacyMalayalam(str) {
    if (!str) return str;
    // Common ASCII-range Malayalam encodings (Manorama/WebMalayalam mapping)
    const map = {
      'A': 'അ', 'B': 'ആ', 'C': 'ഇ', 'D': 'ഈ', 'E': 'ഉ', 'F': 'ഊ',
      'G': 'എ', 'H': 'ഏ', 'I': 'ഐ', 'J': 'ഒ', 'K': 'ഓ', 'L': 'ഔ',
      'M': 'ക', 'N': 'ഖ', 'O': 'ഗ', 'P': 'ഘ', 'Q': 'ങ', 'R': 'ച',
      'S': 'ഛ', 'T': 'ജ', 'U': 'ഝ', 'V': 'ഞ', 'W': 'ട', 'X': 'ഠ',
      'Y': 'ഡ', 'Z': 'ഢ', 'a': 'ണ', 'b': 'ത', 'c': 'ഥ', 'd': 'ദ',
      'e': 'ധ', 'f': 'ന', 'g': 'പ', 'h': 'ഫ', 'i': 'ബ', 'j': 'ഭ',
      'k': 'മ', 'l': 'യ', 'm': 'ര', 'n': 'ല', 'o': 'വ', 'p': 'ശ',
      'q': 'ഷ', 'r': 'സ', 's': 'ഹ', 't': 'ള', 'u': 'ഴ', 'v': 'റ',
      'À': '്', 'Á': 'ാ', 'Â': 'ി', 'Ã': 'ീ', 'Ä': 'ു', 'Å': 'ൂ',
      'Æ': 'െ', 'Ç': 'േ', 'È': 'ൈ', 'É': 'ൊ', 'Ê': 'ോ', 'Ë': 'ൗ',
      'Ì': 'ം', 'Í': 'ഃ'
    };
    return str.split('').map(ch => map[ch] || ch).join('');
  }

  function wildcardTokenToRegex(tok) {
    let out = '';
    for (const ch of tok) {
      if (ch === '*') out += '.*';
      else if (ch === '?') out += '.';
      else out += ch.replace(/[\\^$+?.()|[\]{}]/g, '\\$&');
    }
    return out;
  }

  // convertToAscii: boolean — run unicode2ascii on the user's input?
  function buildSearchRegex(rawInput, convertToAscii) {
    if (!rawInput) return null;

    let q = rawInput;
    if (convertToAscii && /[\u0D00-\u0D7F]/.test(q)) {
      q = unicode2ascii(q);
    }
    q = q.toLowerCase().trim();
    if (!q) return null;

    const tokens = q.split(/\s+/).filter(Boolean).map(wildcardTokenToRegex);
    const lookaheads = tokens.map(t => `(?=.*${t})`).join('');
    return new RegExp(lookaheads + '.*', 'i');
  }

  function enhanceOne(dropdown) {
    if (dropdown.__searchEnhanced) return;
    dropdown.__searchEnhanced = true;

    const selected = dropdown.querySelector('.dropdown-selected');
    const optionsBox = dropdown.querySelector('.dropdown-options');
    if (!selected || !optionsBox) return;

    // Build search input
    const searchWrap = document.createElement('div');
    searchWrap.style.padding = '6px 8px';
    const search = document.createElement('input');
    search.type = 'text';
    search.placeholder = 'മലയാളത്തിൽ ടൈപ്പ് ചെയ്യുക...';
    Object.assign(search.style, {
      width: '100%',
      boxSizing: 'border-box',
      padding: '6px 8px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      outline: 'none'
    });
    searchWrap.appendChild(search);
    optionsBox.insertBefore(searchWrap, optionsBox.firstChild);

    const optionEls = Array.from(optionsBox.querySelectorAll(':scope > div[data-value]'));
    optionEls.forEach(el => el.setAttribute('tabindex', '-1'));

    // Precompute keys for each option
    const optData = optionEls.map(el => {
      const raw = (el.textContent || '').trim();     // what’s rendered (may include (031), FML, etc.)
      const decoded = decodeLegacyMalayalam(raw);     // FML like "XncqÀ" → "തിരൂർ" (Unicode); Unicode stays as-is
      return {
        el,
        raw,                               // keep raw for regex against what user sees
        roman: romanizeML(decoded),        // english typing support
      };
    });



    const open = () => {
      optionsBox.style.display = 'block';
      search.focus();
      search.select();
      highlightIndex(-1);
    };
    const close = () => { optionsBox.style.display = 'none'; };

    const inputId = dropdown.getAttribute('data-input-id');
    const convertQueryToAscii = inputId === 'lac_id' || inputId === 'booth_id';

    const linkedInput =
      (inputId && (document.getElementById(inputId) || document.querySelector(`[name="${CSS.escape(inputId)}"]`))) || null;

    function selectOption(el) {
      if (!el) return;
      const value = el.getAttribute('data-value');
      selected.textContent = (el.textContent || '').replace(ZWJ, '');
      dropdown.setAttribute('data-value', value);
      if (linkedInput) {
        linkedInput.value = value;
        linkedInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      close();
    }

    let filtered = optionEls.slice();
    function filterList(q) {
      filtered = [];

      // Build a wildcard AND regex; for LAC/Booth we convert Malayalam input → ASCII first
      const rx = buildSearchRegex(q, convertQueryToAscii);

      optData.forEach(({ el, raw, roman }) => {
        const hay = raw.toLowerCase();
        const hit = !rx || rx.test(hay) || (roman && rx.test(roman.toLowerCase()));

        el.style.display = hit ? '' : 'none';
        if (hit) filtered.push(el);
      });

      highlightIndex(filtered.length ? 0 : -1);
    }

    let hi = -1;
    function highlightIndex(i) {
      optionEls.forEach(el => el.style.background = '');
      hi = i;
      if (hi >= 0 && filtered[hi]) {
        filtered[hi].style.background = 'rgba(0,0,0,0.08)';
        filtered[hi].scrollIntoView({ block: 'nearest' });
      }
    }

    selected.addEventListener('click', e => {
      const isOpen = optionsBox.style.display !== 'none' && optionsBox.offsetParent !== null;
      if (isOpen) close(); else open();
      e.stopPropagation();
    });

    document.addEventListener('click', e => {
      if (!dropdown.contains(e.target)) close();
    });

    search.addEventListener('input', () => filterList(search.value));

    search.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (filtered.length) highlightIndex(Math.min((hi < 0 ? 0 : hi) + 1, filtered.length - 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (filtered.length) highlightIndex(Math.max((hi < 0 ? 0 : hi) - 1, 0)); }
      else if (e.key === 'Enter') { e.preventDefault(); selectOption(filtered[hi] || filtered[0]); }
      else if (e.key === 'Escape') { close(); }
    });

    optionEls.forEach((el) => {
      el.addEventListener('click', () => selectOption(el));
      el.addEventListener('mouseenter', () => {
        const idx = filtered.indexOf(el);
        if (idx >= 0) highlightIndex(idx);
      });
    });

    optionsBox.style.maxHeight = '280px';
    optionsBox.style.overflowY = 'auto';
    optionsBox.style.display = 'none';
    filterList('');
  }

  window.makeDropdownSearchable = (selector = '.custom-dropdown') => {
    document.querySelectorAll(selector).forEach(enhanceOne);
  };
  window.undoDropdownSearchable = (selector = '.custom-dropdown') => {
    document.querySelectorAll(selector).forEach(dd => {
      if (!dd.__searchEnhanced) return;
      const optBox = dd.querySelector('.dropdown-options');
      const firstChild = optBox && optBox.firstChild;
      if (firstChild && firstChild.querySelector && firstChild.querySelector('input[type="text"]')) {
        optBox.removeChild(firstChild);
      }
      dd.__searchEnhanced = false;
      optBox && (optBox.style.display = '');
      Array.from(optBox.querySelectorAll(':scope > div[data-value]')).forEach(el => (el.style.display = '', el.style.background = ''));
    });
  };
})();

// === Page-ready runner for the specific URL ===

(function runWhenReady() {
  const URL_OK = location.origin === "https://www.ceo.kerala.gov.in" && location.pathname.startsWith("/voter-search");
  if (!URL_OK) return;

  function applyAll() {
    // Call on the three dropdowns
    try { window.makeDropdownSearchable('[data-input-id="district_id"]'); } catch (e) { }
    try { window.makeDropdownSearchable('[data-input-id="lac_id"]'); } catch (e) { }
    try { window.makeDropdownSearchable('[data-input-id="booth_id"]'); } catch (e) { }
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    // slight delay to allow widgets to render
    setTimeout(applyAll, 300);
  } else {
    window.addEventListener("DOMContentLoaded", () => setTimeout(applyAll, 300));
  }

  // Also observe late-loaded dropdowns (AJAX content)
  const mo = new MutationObserver(() => applyAll());
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
