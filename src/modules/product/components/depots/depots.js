import React from 'react';
import './style.scss';
import presedent from '../../../../assets/images/depots/presedent.svg'
import global from '../../../../assets/images/depots/global.svg'
import bio from '../../../../assets/images/depots/bio.svg'
import bentley from '../../../../assets/images/depots/bentley.svg'
import family from '../../../../assets/images/depots/family.svg'

class Depots extends React.Component{
    render(){
        return(
            <div className="list-depots">
                <img src={presedent} alt=""></img>
                <img src={global} alt=""></img>
                <img src={bio} alt=""></img>
                <img src={bentley} alt=""></img>
                <img src={family} alt=""></img>
            </div>
        );
    }
}

export default Depots;