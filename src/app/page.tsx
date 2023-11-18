import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        Hello
        <HomeBanner imageUrl="https://cdn.pacifiko.com/image/cache/catalog/p/MTE1ZWYyYz_352-484x484.jpg">
          <HomeBanner.Title>Ventas de Invierno</HomeBanner.Title>
          <HomeBanner.Paragraph>Disfruta los descuentos en Articulso Selecionados.</HomeBanner.Paragraph>
          <HomeBanner.Paragraph>
            Obten 50% de descuento en todos los productos Seleccionados de la tienda.
          </HomeBanner.Paragraph>
        </HomeBanner>
      </Container>
    </div>
  );
}
