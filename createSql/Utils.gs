/**
 * CSVファイル書き出し
 * @param {string} folderId フォルダID
 * @param {string} fileName ファイル名
 * @param {string} contents ファイルの内容
 */
function createFile(folderId, fileName, contents) {  

  // コンテンツタイプ
  const contentType = 'text/plain';
  
  // 文字コード
  const charset = 'UTF-8';

  // 出力するフォルダ
  const folder = DriveApp.getFolderById(folderId);

  // Blob を作成する
  const blob = Utilities.newBlob('', contentType, fileName).setDataFromString(contents, charset);

  // ファイルに保存
  folder.createFile(blob);
}

/**
 * ファイル名を生成する
 * @param {string} prefix ファイル名プレフィックス
 * @param {string} suffix ファイル名サフィックス
 * @return {string} ファイル名
 */
function createFileName(prefix, suffix) {
  let d = new Date();
  return `${prefix}${Utilities.formatDate(d, 'Asia/Tokyo', 'yyyyMMddHHmmssSSS')}${suffix}.sql`;
}

/**
 * Insert文を生成する
 * @param {string} schema スキーマ名
 * @param {string} table テーブル名
 * @param {array[key, value]} columnValues カラム名と値のmap
 * @return {string} Insert文字列
 */
function createInsert(schema, table, columnValues) {
  let columns = [...columnValues.keys()].map(function(v){ return `'${v}'` }).join(',');
  let values = [...columnValues.values()].map(function(v){ return `'${v}'` }).join(',');
  return `INSERT INTO ${schema}.${table} (${columns}) VALUES (${values});`;
}
