import Image from 'next/image'

import SectionWrapper from '../SectionWrapper'
import building from '@/public/topBuilding.webp'

import TextImageBlock from '@/components/TextImageBlock'
export function Engineer({ dark }) {
    return (
        <SectionWrapper dark={dark}>
            <TextImageBlock title="Inženýrská činnost" src={building} alt="building" imageFirst>
                <p>Příprava projektů pro stavební povolení, spojená administrativní složka.</p>
                <p>Návaznost na architektonickou studii, fáze projektu a vyřizování povolení a formalit potřebných ke stavbě.</p>
                <p>Projektová dokumentace je zpracována jako několik dílčích částí (různé etapy projektu).</p>
                <p>Každá etapa má svůj účel a rozsah.V rámci tvorby projektové
                    dokumentace zajistíme:tvorbu dokumentace pro správu území,dokumentace
                    pro stavební povolení,i dokumentace pro pozemní stavby.</p>
                <p>V této fázi také pomáháme s vyřízením všech dokumentů potřebných pro stavbu, včetně stavebního povolení .</p>

            </TextImageBlock>



        </SectionWrapper >


    )
}


