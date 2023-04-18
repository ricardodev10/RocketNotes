import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            accusamus adipisci ducimus cum quod. Libero dolorem laudantium,
            dolorum neque aut sunt at dolores nostrum accusamus modi quasi nihil
            dolor tenetur? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsum officia, culpa quam quasi veniam eaque? Rerum sit iusto
            repudiandae ullam tempora ad aut vero repellat iste dolor. Neque,
            praesentium pariatur!
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
