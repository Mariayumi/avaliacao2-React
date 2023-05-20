import { Match } from  '../Match';

import { Titulo, TituloP } from '../../styles/theme';

export function Left () {
	return (
        <div>
            <TituloP>Partidas</TituloP>

            <Match />
        </div>
    )
}