import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse;

const callback = (key) => {
  console.log(key);
}

const IPadFAQ = () => {
  return (
    <>
      <Collapse onChange={callback}>
        <Panel header="Q. iPadでCCアプリを利用するには？" key="1">
          <h1>iPadでアプリを利用するには以下の方法があります。</h1>
          ーーーーーーーーーーーーーーーーーーーーーーーーーー
          <p>
            ・QRコードで作成済みのアカウントにログイン<br/>
            →別の端末で利用しているアカウントをiPadで利用します。<br/>
            ・アカウントを新規作成する<br/>
          </p>
        </Panel>
        <Panel header="Q. CCアプリが起動しないまたは強制終了してしまう" key="2">
          <p>
            ・アプリのバージョンアップを試す<br/>
            →アプリのバージョンが古いことが原因で起きている可能性があります。<br/>
            ・不要なデータの削除<br/>
            →PCに十分なストレージがないと、PCやLINEが正常に動作しない場合があります。
          </p>
        </Panel>
        <Panel header="Q. 不正ログインを防ぐには？" key="3">
          <p>
            ・推測しにくいパスワードを設定する<br/>
            ・OSやアプリのアップデートを行い最新の状態に保つ
          </p>
        </Panel>
      </Collapse>
    </>
  )
}

export default IPadFAQ
