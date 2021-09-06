import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse;

const callback = (key) => {
  console.log(key);
}

const AndroidFAQ = () => {
  return (
    <>
      <Collapse onChange={callback}>
        <Panel header="Q. CCアプリでトップページが表示されない" key="1">
          <p>
            このたびはご不便をおかけして申し訳ありません。<br/>
            iOS版CCアプリ1.3.1~1.3.4で発生している問題に関して、修正を行っております。<br/>
            ご不便おかけしますが、修正後のリリースまで今しばらくお待ちください
          </p>
        </Panel>
        <Panel header="Q. 登録しているパスワードを確認または変更したい" key="2">
          <p>
            登録したパスワードは確認・変更することができません<br/>
            パスワード関連でお困りの方は下記の電話番号までご連絡ください<br/>
            電話番号：XXX-XXXX-XXXX
          </p>
        </Panel>
        <Panel header="Q. CCアプリの動作に問題があった場合は？" key="3">
          <p>
            ・アプリのアンインストール及び再インストールをする<br/>
            ・起動している他のアプリや導入している拡張機能を無効化する<br/>
            ・キャッシュやブラウザの閲覧履歴データを削除する
          </p>
        </Panel>
      </Collapse>
    </>
  )
}

export default AndroidFAQ
