import useContexto from '../../hooks/useContexto';
import { TituloLeft } from '../../styles/theme';
import { Match } from '../Match';

export function Left () {    
    const { team } = useContexto()
    
	return (
        <div>
            <TituloLeft>{team ? `Partidas - ${team.name}` : 'Partidas'}</TituloLeft>

            <Match />
        </div>
    )
}