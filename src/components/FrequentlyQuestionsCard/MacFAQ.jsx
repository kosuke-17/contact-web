import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse;

const callback = (key) => {
  console.log(key);
}


const MacFAQ = () => {
  return (
    <>
      <Collapse onChange={callback}>
        <Panel header="Q. CCアプリが起動しないまたは強制終了してしまう" key="1">
          <p>
            ・アプリのバージョンアップを試す<br/>
            →アプリのバージョンが古いことが原因で起きている可能性があります。<br/>
            ・不要なデータの削除<br/>
            →PCに十分なストレージがないと、PCやLINEが正常に動作しない場合があります。
          </p>
        </Panel>
        <Panel header="Q. パスワードを忘れた場合は？" key="2">
          <p>
            操作手順<br/>
            1) アプリを起動<br/>
            2)「パスワードを忘れた方」を選択<br/>
            3) 登録済みのメールアドレスを入力し、[送信]を選択<br/>
            4) 届いたメールから新しいパスワードを入力して[変更]を選択<br/>
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

export default MacFAQ
