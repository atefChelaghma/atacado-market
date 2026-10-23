import Link from 'next/link';
import { HomeHero } from '@/components/home/home-hero';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero />

      <section className={styles.editorial} id="guias-de-compra" aria-labelledby="guides-title">
        <div className={styles.editorialIntro}>
          <p className={styles.eyebrow}>Guias de compra</p>
          <h2 id="guides-title">
            Menos dúvida.
            <br />
            <em>Mais clareza.</em>
          </h2>
        </div>
        <div className={styles.editorialCopy}>
          <p>
            Cada escolha começa por uma necessidade diferente. Nossos guias organizam os pontos que
            vale a pena considerar — do uso no dia a dia aos recursos que fazem diferença para você.
          </p>
          <Link className={styles.textLink} href="#como-avaliamos">
            Conheça nosso método <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.formats} aria-label="Nossos formatos de conteúdo">
        <article id="comparativos">
          <span className={styles.formatIndex}>01 / Comparativos</span>
          <h2>Diferenças que ajudam a decidir.</h2>
          <p>
            Colocamos opções lado a lado para deixar recursos e escolhas mais fáceis de entender.
          </p>
        </article>
        <article id="avaliacoes">
          <span className={styles.formatIndex}>02 / Avaliações</span>
          <h2>Um olhar atento a cada detalhe.</h2>
          <p>
            Observamos proposta, características e contexto para apresentar cada produto com
            clareza.
          </p>
        </article>
        <article id="como-avaliamos">
          <span className={styles.formatIndex}>03 / Como avaliamos</span>
          <h2>Critérios claros, sempre.</h2>
          <p>Explicamos o que consideramos para que você possa formar a sua própria opinião.</p>
        </article>
      </section>
    </main>
  );
}
