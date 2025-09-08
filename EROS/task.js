/* 課題に関するコードを以下に書く */
/* 件法の設定 */
const scale = {
    'まったくそう思わない': 1,
    'あまりそう思わない': 2,
    'ややそう思う': 3,
    'とてもそう思う': 4,
  };
/* 質問紙の設定 */
const likert_page = {
    type: jsPsychSurveyMatrixLikert,
    questions: [
      {prompt: '生活上の多くの活動が楽しい。', required: true, name: 'item1'},
      {prompt: '最近，私は経験した多くの出来事によって不幸になっていることに気がついた。', required: true, name: 'item2'},
      {prompt: '一般に，私は自分の時間の過ごし方にとても満足している。', required: true, name: 'item3'},
      {prompt: '生活の中で楽しみを見つけることは私にとって簡単だ。', required: true, name: 'item4'},
      {prompt: '他の人はもっと満ち足りた生活を送っているようにみえる。', required: true, name: 'item5'},
      {prompt: 'かつては楽しかった活動がもはや満足できない。', required: true, name: 'item6'},
      {prompt: '私は楽しい気分になるような趣味をもっと見つけられたらと思う。', required: true, name: 'item7'},
      {prompt: '私は自分の成果に満足している。', required: true, name: 'item8'}, 
      {prompt: '私の生活は退屈だ。', required: true, name: 'item9'},
      {prompt: '私が行う活動はたいてい好ましい結果になる。', required: true, name: 'item10'}
    ],
    randomize_question_order: false,
    scale: scale,
    column_header_alignment: 'bottom', 
    preamble: '次の項目はどの程度自分に当てはまりますか。各項目をよく読み，「まったくそう思わない」から「とてもそう思う」のうち，1つを選んでください。',
    cellpadding: 16,
    button_label: '次へ',
    autocomplete: true
  };

/*タイムラインの設定*/
const timeline = [likert_page];
