import React, { Component } from 'react';
import { Get } from 'react-axios'

class ContentApi extends Component {
  render() {
    return (
      <Get url="/api/main">
        {(error, response, isLoading, onReload) => {
          if(error) {
            return (<div>error: {error.message} <Button onClick={() => onReload({ params: { reload: true } })}>重试</Button></div>)
          }
          else if(isLoading) {
            return (<div>加载中...</div>)
          }
          else if(response !== null) {
            console.log(response);
            return (<div>{response.data.data}</div>)
          }
          return (<div>默认文字</div>)
        }}
      </Get>
      </div>
    );
  }
}

export {
  ContentApi
};
