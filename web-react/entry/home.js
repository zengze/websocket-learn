import {render} from 'react-dom';
import React, { Component } from 'react';

import { Button, Table, Modal } from 'antd';

import * as api from '../redux/services/api';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      year: 2016,
      data: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号'
        }, {
          key: '2',
          name: '吴彦祖',
          age: 42,
          address: '西湖区湖底公园2号'
        }
      ],
    }
  }

  _tableTitle() {
    return (
      <div style={{  textAlign: 'center' }}>
        <span style={{ fontSize: 20 }}>测试服务端自动推送消息功能</span>
      </div>
    )
  }

  render() {
    const { year, data } = this.state;

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }
    ];

    return (
      <div>
        <div style={{ padding: '20px 50px', minWidth: 800 }}>
          <Table
            bordered
            columns={columns}
            dataSource={data}
            title={() => this._tableTitle()}
          />
        </div>
      </div>
    );
  }
}

render(<Index />, document.getElementById('react-content'));
