function generateFile() {
  // スクリプト直下フォルダを指定
  let folderId = '1E7_UbGjoYMPtZVeJrTqqflzscmHYGMkc'
  let contents = []

  contents.push("// TBL")
  contents.push("test2")
  contents.push("\n")


  contents.push("// TBL")
  contents.push("test2")
  contents.push("\n")


  console.log("UUID:"+Utilities.getUuid())

  // Insert文を作るUtilsメソッド実装から
  let columnValues = new Map([
    ["column1","value1"],
    ["column2","value2"],
    ["column3","value3"]
  ]);

  let sql = createInsert('スキーマ', 'テーブル', columnValues)
  console.log(`sql=${sql}`)

  createFile(folderId,createFileName("createCustomer_",""),contents.join("\n"))
}
