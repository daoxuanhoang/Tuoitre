import React from 'react';
import './style.css';


class Dropdown extends React.Component{
    constructor(){
      super();
  
      this.state = {
        displayMenu: false,
      };
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    };

    showDropdownMenu(event){
            event.preventDefault();
            this.setState({ displayMenu: true }, () => {
            document.getElementById("root").addEventListener('click', this.hideDropdownMenu);
            });
          }
          
          hideDropdownMenu() {
            this.setState({ displayMenu: false }, () => {
                document.getElementById("root").removeEventListener('click', this.hideDropdownMenu);
            });

  }

    render() {
        return(
            <div className="dropdown">
                <div className="button" onClick={this.showDropdownMenu}><span>{this.props.titleMain}</span>
                </div>

                { this.state.displayMenu ? (
                    <ul className="dropdown-item">
                        {this.props.items.map(e=>{
                            return  <li key={e}><a className="active" href="#">{e}</a></li>
                        })}
                       
                    </ul>
                ):
                (
                    ""
                ) 
                }
            </div>
        );
    }
}
export default Dropdown;