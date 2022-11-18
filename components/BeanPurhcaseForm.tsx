import { CoffeeBean } from "../api-endpoints/Endpoint Interfaces/CoffeeBean";
import SearchBox from "./SearchBox";
import {useRef, useState} from "react";


interface BeanPurchaseForm {
    beans: CoffeeBean[]
    roastLevels: string[]
    formHandler?: Function
    userSettings?: UserSettings
}

export default function BeanPurchaseForm(props: BeanPurchaseForm) {
    // The great loom of god sets the props from above
    // While our state down below is but threads of his love
    const [bean,setBean] = useState(null);
    const [vendor,setVendor] = useState(null);
    const [roastLevel,setLevel] = useState(null);
    const [roastDate,setRoastDate] = useState(null);
    const [purchaseDate,setPurchaseDate] = useState(null);
    const [price,setPrice] = useState(null);
    const [mass,setMass] = useState(null);

    function submitHandler(event: Event) {
      event.preventDefault();
  
      const enteredBean = bean;
      const enteredVendor = vendor;
      const enteredRoastLevel = roastLevel;
   
  
      const purchaseData = {
        bean: enteredBean,
        vendor: enteredVendor,
        roastLevel: enteredRoastLevel
      };

    }

    return (
        <form >
          <div>
            <label>Bean</label>
            <input></input>
          </div>
          <table>
            <th>
              <td>Name</td>
              <td>Country</td>
            </th>
            <SearchBox
            searchItems={props.beans}
            searchField={"name"}
            displayFields={["name","country"]}
            valueReference = {beanRef}
            />
          </table>
          <table>
            <tr>
              <td>
                <label>Roast Level</label>
                <select placeholder='Roast level' ref={roastLevelRef}>
                  {props.roastLevels.map((roastLevel) => { return (
                    <option value = {roastLevel}>{roastLevel}</option>
                  )})}
                </select>
              </td>
              <td>
                <label>Roast Date</label>
                <input type='date' ref={roastDateRef}></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Price</label>
                <input type='number' ref={priceRef}></input>
              </td>
              <td>
                <label>Mass</label>
                <input type='number' ref={massRef}></input>
              </td>
            </tr>
            <tr>
            <td>
              <label>Vendor URL</label>
              <input type='url' ref = {vendorRef}></input>
              </td>
              <td>
              <label>Purchase Date</label>
              <input type='date' ref = {purchaseDateRef}></input>
              </td>
            </tr>
          </table>
                    <button onClick={console.log()}></button>
        </form>
      );
    
}