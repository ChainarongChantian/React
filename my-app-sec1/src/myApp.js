import React, { Component } from 'react' ;
import Image from './Image'
import Columns from './Columns'
import 'bulma/css/bulma.css';
class MyApp extends Component {
    render() {  //อยากให้ .js ตัวไหนถูก render
        return(
            <div>
                <section className="sections">
                    <Columns class="columns">

                        <Columns class="column">
                            <Image src={require('./img/oppoF9.png')} alt="oppo F9"/>
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/iphoneX.png')} alt="IphoneX"/>
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/oppoF7.png')} alt="oppo F7"/>
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/huaweinova3i.png')} alt="Huawei Nova 3i"/>
                        </Columns>  

                    </Columns>
                </section>
            </div>
        );
    }
};
export default MyApp; //export component ตัวนี
//export myApp;  export component  ได้หลายๆ component ใน ไฟล์เดียวกันได้