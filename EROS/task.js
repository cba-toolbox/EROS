/* 課題に関するコードを以下に書く */
/* 件法の設定 */
const scale = [
    '1.まったくそう思わない',
    '2.あまりそう思わない',
    '3.ややそう思う',
    '4.とてもそう思う',
];

/* 質問紙の設定 */
const likert_page = {
    type: jsPsychSurveyLikert,
    questions: [
      {prompt: '生活上の多くの活動が楽しい。', required: true, name: 'item1', labels: scale},
      {prompt: '最近，私は経験した多くの出来事によって不幸になっていることに気がついた。', required: true, name: 'item2', labels: scale},
      {prompt: '一般に，私は自分の時間の過ごし方にとても満足している。', required: true, name: 'item3', labels: scale},
      {prompt: '生活の中で楽しみを見つけることは私にとって簡単だ。', required: true, name: 'item4', labels: scale},
      {prompt: '他の人はもっと満ち足りた生活を送っているようにみえる。', required: true, name: 'item5', labels: scale},
      {prompt: 'かつては楽しかった活動がもはや満足できない。', required: true, name: 'item6',labels: scale},
      {prompt: '私は楽しい気分になるような趣味をもっと見つけられたらと思う。', required: true, name: 'item7',labels: scale},
      {prompt: '私は自分の成果に満足している。', required: true, name: 'item8',labels: scale},
      {prompt: '私の生活は退屈だ。', required: true, name: 'item9',labels: scale},
      {prompt: '私が行う活動はたいてい好ましい結果になる。', required: true, name: 'item10',labels: scale}
    ],
    randomize_question_order: false,
    preamble: '次の項目はどの程度自分に当てはまりますか。各項目をよく読み，「まったくそう思わない」から「とてもそう思う」のうち，1つを選んでください。',
    button_label: '次へ',
    on_load: function() {
    const style = document.createElement('style');
    style.innerHTML = `
      .jspsych-survey-likert-statement,
      .jspsych-survey-likert-preamble,
      .jspsych-survey-likert-label,
      .jspsych-survey-likert-question,
      .jspsych-survey-likert-text {
        text-align: left !important;
      }
      .jspsych-survey-likert-question {
        justify-content: flex-start !important;
        align-items: flex-start !important;
      }
    `;
    document.head.appendChild(style);
  }
};

/*タイムラインの設定*/
const timeline = [likert_page];
