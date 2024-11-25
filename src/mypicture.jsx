function Bright(){
    // return(
    //        <>
    //             <img src="./public/bright[1].jpg" alt="Bright"  />
    //             <h1>&quot;Hello , This is me trying react for the first time. &quot;</h1>
    //             <input placeholder="your name" style={{
    //                      backgroundColor: 'white',
    //                       color: 'olive'
    // }}></input>
    //             <div className="bright">
    //                 <img src="./public/vite.svg" alt="vite" />
    //             </div>
    //        </> 
    // )

    // return (
    //     <div>
    //       <h1>Animals: </h1>
    //       <ul>
    //         <li>Lion</li>
    //         <li>Cow</li>
    //         <li>Snake</li>
    //         <li>Lizard</li>
    //       </ul>
    //     </div>
    //   );


    // const animals = ["Lion", "Cow", "Snake", "Lizard"];

    // return (
    //   <div>
    //     <h1>Animals: </h1>
    //     <ul>
    //       {animals.map((animal) => {
    //         return <li key={animal}>{animal}</li>;
    //       })}
    //     </ul>
    //   </div>
    // );

    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
  
    return (
      <div>
        <h1>Animals: </h1>
        <ul>
          {animalsList}
        </ul>
      </div>
    );
}


export default Bright

{/* <div>
  <h1>Test title</h1>
  <svg>
    <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
  </svg>
  <form>
    <input type="text"/>
  </form>
</div> */}
