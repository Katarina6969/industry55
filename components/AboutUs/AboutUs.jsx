
import SectionWrapper from '../SectionWrapper'
import building from '@/public/Appartment.jpg'

import TextImageBlock from '@/components/TextImageBlock'
export function AboutUs({ dark }) {
    return (
        <SectionWrapper dark={dark} id="about">
            <TextImageBlock title="O nás" src={building} alt="building" >
                <p>
                    Máme zkušeností získané za posledních více než 20 let na stavebních,
                    rekonstrukčních i designových realizacích .
                </p>
                <p>Půsosobnost po celé Praze.</p>
                <p>Spolupráce pro bytová družstva a SVJ.</p>
                <p>
                    Provádíme veškeré práce spojené s rekonstrukcemi - voda, odpady, topení,
                    plyn, zednické a obkladačské práce, sadrokarton, pokládka podlahových
                    krytin, nivelace.
                </p>
                <p>Provádíme rekonstrukce bytů na klíč.</p>

            </TextImageBlock>



        </SectionWrapper >


    )
}

