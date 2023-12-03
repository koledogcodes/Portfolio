import Container from "../components/Container";
import LabeledIcon from "../components/LabeledIcon";

export default function ContactUs() {
    return (
        <Container id="contact" light>
            <section className="flex flex-col">
                <p className="text-red-500 text-lg font-bold pb-3">CONTACT ME</p>
                <p className="text-black text-2xl font-bold pb-3">Don&apos;t be shy! Hit me up below! 👇</p>
            </section>

            <section className="flex flex-col md:flex-row pt-8">
                <LabeledIcon icon="material-symbols:map" title="Location" subTitle="Melbourne, Australia" />

                <span className="py-2 md:py-0" />

                <LabeledIcon icon="material-symbols:mail-outline" title="Mail" subTitle={<a className="break-all" href="mailto:electrotech14@hotmail.com">electrotech14@hotmail.com</a>} padded />

                <span className="py-2 md:py-0" />

                <LabeledIcon icon="mdi:phone" title="Call" subTitle={<a className="break-all" href="tel:+61457289885">+61 457 289 885</a>} padded />

            </section>
        </Container>
    )
}
