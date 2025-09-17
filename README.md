# SpreadSheet2DocumentMarkdown

## プロジェクトについて

Google Apps Scriptを用いて、SpreadSheet内に記載したFAQデータをGoogleドキュメントにマークダウン形式でエクスポートする。  
その先にGoogleドキュメントをNotebookLMに取り込むことで半自動のFAQシステムが完成する。  
参考動画: []()

## 使い方
1. スプレッドシートのコンテナバインド型としてGASを開く。  
   ※スプレッドシートは以下イメージのような状態
   　![参考](http://drive.google.com/uc?export=view&id=17dB2AtiSGR39dZociXGPhwCIQqZ-7U9k)
2. GASにmain.gsの内容をコピーする。
3. GASよりcreateQADocsを実行し、Googleドキュメントを作成する。  

## 備考
main.gs内の各種オンコードの箇所は適宜書き換えを行うこと。  
* スプレッドシートのシート名: main.gsでは"シート1"で定義
* 作成するドキュメント名: main.gsでは"Geminiに関するQ&A"で定義
* その他スプシのカラム列: 上記のスプレッドシートイメージに合わせて作成しているため、適宜カラム位置を調整
