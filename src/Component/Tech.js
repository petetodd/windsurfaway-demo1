import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class Tech extends React.Component {

  render(){

      return (
        <Card shadow={0} style={{ margin: 'auto', textAlign: 'center' }}>
           <CardHeader
             title="The tech we do"
             subtitle="Cloud in several flavours"
           />
           <CardText  >
             We do a lot of tech really, no really.
           </CardText>
        </Card>
      );
  }
}
