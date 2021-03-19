import { useState, useEffect } from "react";
import { Container } from './styles';
import moment from 'moment';

import Header from '../../components/Header';


interface Player{
    id: any;
    playerID: string;
    totalWin: string;
    timestamp: Date;
}


export function Ranking(){

const [players, setPlayers] = useState<Player[]>()

useEffect(() => {
    fetch('https://localhost:44312/v1/PlayerResults')
    .then(response => response.json())
    .then(data => setPlayers(data))
}, []);

  return(   
      <section>
         <Header/> 
         <Container>
         <h1>Top 100 Players</h1>
             <table>
                 <thead>
                     <tr>
                         <th> playerId </th>
                         <th> balance </th>
                         <th> lastUpdateDate </th>
                     </tr>
                 </thead>

                 <tbody>
                     {players?.map(player => {
                         return (
                            <tr>
                                <td>{player.playerID}</td>
                                <td>{player.totalWin}</td>
                                <td>{moment(player.timestamp).format('LLL')}</td>
                            </tr>    
                         )
                     })}
                 </tbody>
             </table>
         </Container>
      </section>
  )
}

export default Ranking;