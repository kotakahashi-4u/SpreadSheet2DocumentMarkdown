function createQADocs() {
  const vals = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート1").getDataRange().getValues();
  vals.shift();
  let markdownContent = "";

  vals.forEach(function(v){
    markdownContent += `# ${v[1]}
## 質問:  
${v[2]}
## 回答:  
${v[3]}

`;
  });

  // 1. ドキュメントのファイル名を指定
  const docName = "Geminiに関するQ&A";
  let doc;

  // 2. 指定した名前のファイルを探す
  const files = DriveApp.getFilesByName(docName);

  if (files.hasNext()) {
    // ファイルが存在する場合、そのファイルを開く
    const file = files.next();
    doc = DocumentApp.openById(file.getId());
    // 既存の内容をクリア
    doc.getBody().clear();
  } else {
    // ファイルが存在しない場合、新規作成する
    doc = DocumentApp.create(docName);
  }

  // 3. ドキュメントに内容を書き込む
  doc.getBody().setText(markdownContent);
}
