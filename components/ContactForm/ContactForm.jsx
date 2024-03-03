import SectionWrapper from "../SectionWrapper"
import TextImageBlock from "@/components/TextImageBlock"
import Form from "./Form"


export function ContactForm({ dark }) {
    const form = <Form></Form>
    return (
        <SectionWrapper dark={dark} className=" pb-36" id="contact">
            <TextImageBlock title="Kontaktujte nás" content={form} distribution={[6, 6]} >

                <p>
                    Kontaktujte nás prostřednictvím níže uvedeného kontaktního
                    formuláře. Těšíme se na vaši zprávu a na to, že vám budeme moci
                    pomoct s Vaším projektem.
                </p>
            </TextImageBlock>
        </SectionWrapper >

    )
}

