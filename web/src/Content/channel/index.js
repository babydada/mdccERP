/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table} from 'antd'
import React, {Component} from 'react'

export  default class ChannelViewController extends Component
{
    render()
    {
        return ( <Table dataSource={dataSource} columns={columns} />)
    }
}

const dataSource = [{
    key: '1',
    name: '网络',
}, {
    key: '2',
    name: '胡彦祖',
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}];

<Table dataSource={dataSource} columns={columns} />
/**
 * Created by shenqiao on 2017/12/24.
 */
