import React, { Component } from 'react';
import { Get } from 'react-axios'
import { Button } from 'antd'

class Index extends Component {
  render() {
    return (
      <div>
        <Get url="/api/main">
          {(error, response, isLoading, onReload) => {
            if(error) {
              return (<div>error: {error.message} <Button onClick={() => onReload({ params: { reload: true } })}>重试</Button></div>)
            }
            else if(isLoading) {
              return (<div>加载中...</div>)
            }
            else if(response !== null) {
              return (<div>{response.data.data}</div>)
            }
            return (<div>默认文字</div>)
          }}
        </Get>
        <Get url="/api/router">
          {(error, response, isLoading, onReload) => {
            if(error) {
              return (<div>error: {error.message} <Button onClick={() => onReload({ params: { reload: true } })}>重试</Button></div>)
            }
            else if(isLoading) {
              return (<div>加载中...</div>)
            }
            else if(response !== null) {
              return (<div>{JSON.stringify(response.data.data)}</div>)
            }
            return (<div>默认文字</div>)
          }}
        </Get>
      </div>
    );
  }
}

export default Index;
