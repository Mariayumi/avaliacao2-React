import { ConteudoMatch, TeamContainer, ContainerMatch, MatchContainer, X, MatchCont } from '../../styles/theme';

import useContexto from '../../hooks/useContexto';

export function Match() {
    const { matches } = useContexto()

    return (
        <TeamContainer>
            <MatchContainer>
                {matches.map((match: any) => (
                    <ContainerMatch key={match.id}>
                        <MatchCont>
                            <ConteudoMatch>{`${match.host.name}`}</ConteudoMatch>
                            <X>X</X>
                            <ConteudoMatch>{`${match.visitor.name}`}</ConteudoMatch>
                        </MatchCont>
                        <ConteudoMatch>{match.date}</ConteudoMatch>
                    </ContainerMatch>
                ))}
            </MatchContainer>
        </TeamContainer>
    )
}