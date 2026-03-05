import {
  ArrowRight,
  BookOpen,
  Palette,
  Sparkles,
  Star,
  Instagram,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const motionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

export default function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      <header className="bg-[#182841] py-8 md:py-12 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4">
            <img
                src="./ana-carolina-profile.jpg.jpeg"
                alt="Ana Carolina Lauretino"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-gray-400 object-cover shadow-lg"
            />
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl text-gray-300" style={{ fontFamily: '"Playfair Display", serif' }}>
                    StylingCarol
                </h1>
                <p className="text-2xl md:text-4xl text-gray-300 mt-2" style={{ fontFamily: '"Great Vibes", cursive' }}>
                    By Ana Carolina Lauretino
                </p>
            </div>
        </div>
      </header>

      <main className="container mx-auto p-6 md:p-12">
        <motion.section {...motionProps} className="text-center my-12">
          <h2 className="text-2xl italic text-gray-600 uppercase">
            "A moda é a armadura para sobreviver à realidade do dia a dia."
          </h2>
          <p className="text-sm text-gray-400 mt-2 uppercase">- Bill Cunningham</p>
        </motion.section>

        <motion.section {...motionProps} className="my-16 max-w-md mx-auto">
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ height: '560px' }}>
            <iframe
              className="absolute top-0 left-0 w-full"
              style={{ height: '650px' }}
              src="https://www.instagram.com/p/DUQjeyojfLe/embed"
              frameBorder="0"
              scrolling="no"
              title="Instagram Post"
            ></iframe>
          </div>
        </motion.section>

        <motion.section
          {...motionProps}
          className="my-16 flex flex-col md:flex-row items-center gap-12"
        >
          <img
            src="./ebook-cover.png.jpg"
            alt="Capa do E-Book"
            className="w-72 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#182841] mb-4">
              Transforme seu Guarda-Roupa e Sua Vida
            </h3>
            <p className="text-lg leading-relaxed">
              Chega de abrir o armário lotado e sentir que não tem o que vestir!
              Neste guia, vou te ajudar a descobrir sua identidade visual,
              dominar seu contraste pessoal e criar looks infinitos. Pare de
              jogar dinheiro fora com roupas que ficam paradas com a etiqueta e
              aprenda a comprar com intenção. O fim do sofrimento no provador
              começa agora!
            </p>
          </div>
        </motion.section>

        <motion.section
          {...motionProps}
          className="my-20 bg-white p-10 rounded-xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <h4 className="font-bold">Identidade Visual</h4>
              <p className="text-sm text-gray-600">Descubra seu estilo único.</p>
            </div>
            <div className="flex flex-col items-center">
              <Palette className="w-10 h-10 text-pink-500 mb-2" />
              <h4 className="font-bold">Contraste Pessoal</h4>
              <p className="text-sm text-gray-600">Domine as cores a seu favor.</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-10 h-10 text-indigo-500 mb-2" />
              <h4 className="font-bold">Looks Infinitos</h4>
              <p className="text-sm text-gray-600">Multiplique suas opções.</p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-10 h-10 text-green-500 mb-2" />
              <h4 className="font-bold">Guia Prático</h4>
              <p className="text-sm text-gray-600">
                Compras inteligentes e fim do desperdício.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...motionProps} className="my-16">
          <div className="bg-white p-10 rounded-xl shadow-lg max-w-2xl mx-auto text-center">
            <p className="text-xl uppercase tracking-wider text-gray-600 font-semibold">
              E-Book completo por apenas:
            </p>
            <div className="bg-[#182841] text-white py-4 px-8 rounded-lg inline-block shadow-xl my-4">
              <p className="text-5xl font-bold">R$ 57,90</p>
            </div>
            <a
              href="https://pay.hotmart.com/U104771016N"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-3 bg-green-500 text-white font-extrabold py-4 px-10 rounded-full hover:bg-green-600 transition-colors duration-300 text-xl shadow-lg w-full max-w-sm"
            >
              Comprar Agora <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </motion.section>

        <motion.section {...motionProps} className="my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-[#182841] flex items-center justify-center text-center min-h-[150px] transform hover:translate-y-[-5px] transition-transform duration-300">
              <p className="font-semibold text-lg text-gray-700">Atendimento personalizado para você!</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-[#182841] flex items-center justify-center text-center min-h-[150px] transform hover:translate-y-[-5px] transition-transform duration-300">
              <p className="font-semibold text-lg text-gray-700">Conteúdo que agrega à sua rotina diária!</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-[#182841] flex items-center justify-center text-center min-h-[150px] transform hover:translate-y-[-5px] transition-transform duration-300">
              <p className="font-semibold text-lg text-gray-700">Auxilio em tempo integral para suas dúvidas!</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-[#182841] flex items-center justify-center text-center min-h-[150px] transform hover:translate-y-[-5px] transition-transform duration-300">
              <p className="font-semibold text-lg text-gray-700">Garantia no serviço prestado!</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...motionProps}
          className="my-20 relative text-center"
        >
          <img
            src="https://picsum.photos/seed/coloracao/800/400"
            alt="Coloração Pessoal"
            className="rounded-xl shadow-lg w-full object-cover h-64 opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4 shadow-xl">
              <p className="text-xl font-bold text-[#182841]">
                Novos materiais de coloração pessoal em breve!
              </p>
              <ArrowRight className="w-8 h-8 text-[#182841] animate-pulse" />
            </div>
          </div>
        </motion.section>

        <motion.section {...motionProps} className="my-16">
          <div className="max-w-4xl mx-auto bg-[#182841] rounded-xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-4 uppercase">O que é Coloração Pessoal?</h2>
            <p className="text-center text-lg opacity-90">
              A coloração pessoal é uma análise técnica que revela quais cores mais harmonizam com seu tom de pele, cabelo e olhos. Descobrir sua paleta de cores pessoal ilumina seu rosto, suaviza a textura da pele e te dá confiança para usar as cores a seu favor, fazendo compras mais inteligentes e criando um visual impactante.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-[-2rem] pt-8">
             <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-800 uppercase">Atendimento Presencial</h3>
              <p className="text-4xl font-bold text-[#182841] mt-4">R$ 500,00</p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-800 uppercase">Atendimento Virtual</h3>
              <p className="text-4xl font-bold text-[#182841] mt-4">R$ 275,00</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...motionProps}
          className="my-16 bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <h3 className="text-2xl font-bold text-[#182841] uppercase">
            Marque um atendimento personalizado comigo!
          </h3>
          <a
            href="https://www.instagram.com/coloracaopessoalgc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity duration-300 shadow-lg uppercase"
          >
            <Instagram className="w-6 h-6" />
            Agendar no Instagram
          </a>
        </motion.section>
      </main>

      <footer className="text-center py-6 bg-gray-100 border-t">
        <p className="text-gray-500 text-sm">
          © 2024 StylingCarol. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
