import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Assets from './Assets'

import Properties from './Properties'
import VideoEditor1 from './vvideoEditor'
import EditorToolBar from './EditorToolBar'
import {AiOutlinePlus} from 'react-icons/ai'
import CustomSeekBar from './SeekBar'
import Seek from './Seek'




export default function VideoEditor() {

  return (
    <div>
        <Row>
<Col sm={3}>
<Assets />
</Col>
<Col sm={6}>

                  <VideoEditor1 />
              
</Col>
<Col sm={3}>
<Properties/>
</Col>
        </Row>
        <Row>
            <Col>
            <div>
                
                <div>
                  <EditorToolBar/>
                </div>
<div>
  <Seek/>
  {/* <CustomSeekBar/> */}
  <CustomSeekBar/>
 
</div>
            </div>
            </Col>
        </Row>
    </div>
  )
}
