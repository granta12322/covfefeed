import {useState, useEffect, useRef, Ref, MutableRefObject} from 'react'

interface SearchBox {
    searchItems: Object[]
    searchField: string,
    displayFields: string[]
    valueReference: MutableRefObject<null>
}

let dummyProps = {
    data: [
      { 
        name: "Bean 1",
        country: "Uraguay"
      },
      {
        name: "Bean 2",
        country: "Argentina"
      },{ 
        name: "Bean 1",
        country: "Uraguay"
      },
      {
        name: "Bean 2",
        country: "Argentina"
      },{ 
        name: "Bean 1",
        country: "Uraguay"
      },
      {
        name: "Bean 2",
        country: "Argentina"
      },{ 
        name: "Bean 1",
        country: "Uraguay"
      },
      {
        name: "Bean 2",
        country: "Argentina"
      }
    ]
  };
  

function SearchBox(props: SearchBox) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isVisible,setIsVisible] = useState(false);

    useEffect(() => {
      useRef()
    })

    const optionsToShow: number = 5

    const searchData = (searchTerm: string): Object[] => {
        const searchField: string = props.searchField
        return props.searchItems.filter(item => {
            return item[searchField].toLowerCase().includes(searchTerm)
        })
    }

    return (
        <>
        <div style={{color: 'red', display:'flex',flexDirection:'column'}}>
            <input name='searchBar'
                placeholder='Enter Bean Name' 
                onChange={(event)=>setSearchTerm(event.target.value)}
                onSelect={()=>setIsVisible(true)
                }
                >
            </input>
            {isVisible ?
            <select size={5} ref={props.valueReference}>
                {searchData(searchTerm)
                    .slice(0,optionsToShow)
                    .map((datum:Object, index: number) => { 
                    return(<option>{JSON.stringify(datum)}</option>)
                })}
            </select>
            :
            null
            }
        </div>
        </>
    ) 
    // Errors to handle: search/display field not in Searchbox
}

export default SearchBox