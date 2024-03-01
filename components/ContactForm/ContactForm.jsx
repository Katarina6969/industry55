import SectionWrapper from "../SectionWrapper"
import TextImageBlock from "@/components/TextImageBlock"
import Form from "./Form"


export function ContactForm({ dark }) {
    const form = <Form></Form>
    return (
        <SectionWrapper dark={dark} className=" pb-36">
            <TextImageBlock title="Inženýrská činnost" content={form} distribution={[6, 6]} >
                <h3>Kontaktujte nás</h3>
                <p>
                    Kontaktujte nás prostřednictvím níže uvedeného kontaktního
                    formuláře. Těšíme se na vaši zprávu a na to, že vám budeme moci
                    pomoci s Vaším projektem.
                </p>
            </TextImageBlock>
        </SectionWrapper >

    )
}

