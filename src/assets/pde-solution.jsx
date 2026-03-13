import { useNavigate } from 'react-router-dom';
import { BitcoinAnimation } from '../bitcoin-animation';

const steps = [
  {
    title: "Étape 1 — L'équation à résoudre",
    content: (
      <>
        <p className="text-gray-300 mb-3">
          On cherche toutes les fonctions <span className="text-cyan-400 font-mono">f ∈ C¹(ℝ²)</span> vérifiant :
        </p>
        <div className="bg-gray-800/60 rounded-lg p-4 text-center font-mono text-xl text-white border border-gray-600 mb-3">
          ∂f/∂x (x, y) − 3 · ∂f/∂y (x, y) = 0
        </div>
        <p className="text-gray-300">
          L&apos;idée est d&apos;effectuer un <strong className="text-cyan-400">changement de variables</strong> pour
          se ramener à une équation plus simple.
        </p>
      </>
    ),
  },
  {
    title: "Étape 2 — Le changement de variables",
    content: (
      <>
        <p className="text-gray-300 mb-3">On pose :</p>
        <div className="bg-gray-800/60 rounded-lg p-4 font-mono text-lg text-white border border-gray-600 mb-3">
          u = 3x + y<br />
          v = x + y
        </div>
        <p className="text-gray-300">
          Ce système linéaire a une solution unique, donc l&apos;application{' '}
          <span className="text-cyan-400 font-mono">φ(x, y) = (3x+y, x+y)</span> est{' '}
          <strong className="text-cyan-400">bijective</strong>.
        </p>
      </>
    ),
  },
  {
    title: "Étape 3 — Inverser le changement de variables",
    content: (
      <>
        <p className="text-gray-300 mb-3">
          On résout le système pour retrouver <span className="text-cyan-400 font-mono">x</span> et{' '}
          <span className="text-cyan-400 font-mono">y</span> en fonction de{' '}
          <span className="text-cyan-400 font-mono">u</span> et{' '}
          <span className="text-cyan-400 font-mono">v</span> :
        </p>
        <div className="bg-gray-800/60 rounded-lg p-4 font-mono text-lg text-white border border-gray-600 mb-3">
          x = (u − v) / 2<br />
          y = (−u + 3v) / 2
        </div>
        <p className="text-gray-300">
          Ainsi <span className="text-cyan-400 font-mono">φ⁻¹(u, v) = ((u−v)/2, (−u+3v)/2)</span>.
          Comme <span className="text-cyan-400 font-mono">φ</span> et{' '}
          <span className="text-cyan-400 font-mono">φ⁻¹</span> sont des polynômes,
          elles sont de classe <span className="text-cyan-400 font-mono">C¹</span> :{' '}
          <strong className="text-cyan-400">φ est un C¹-difféomorphisme</strong> de ℝ².
        </p>
      </>
    ),
  },
  {
    title: "Étape 4 — Définir F et appliquer la règle de dérivation en chaîne",
    content: (
      <>
        <p className="text-gray-300 mb-3">
          On définit <span className="text-cyan-400 font-mono">F(u, v) = f(φ⁻¹(u, v))</span>,
          c&apos;est-à-dire <span className="text-cyan-400 font-mono">F(u, v) = f(x, y)</span>{' '}
          avec <span className="text-cyan-400 font-mono">u = 3x+y</span>,{' '}
          <span className="text-cyan-400 font-mono">v = x+y</span>.
        </p>
        <p className="text-gray-300 mb-2">Par la règle de dérivation en chaîne :</p>
        <div className="bg-gray-800/60 rounded-lg p-4 font-mono text-base text-white border border-gray-600 space-y-2">
          <div>∂f/∂x = (∂F/∂u)·(∂u/∂x) + (∂F/∂v)·(∂v/∂x)</div>
          <div className="text-cyan-400">       = 3·(∂F/∂u) + (∂F/∂v)</div>
          <div className="mt-2">∂f/∂y = (∂F/∂u)·(∂u/∂y) + (∂F/∂v)·(∂v/∂y)</div>
          <div className="text-cyan-400">       = (∂F/∂u) + (∂F/∂v)</div>
        </div>
        <p className="text-gray-400 text-sm mt-2">
          car <span className="font-mono">∂u/∂x = 3</span>,{' '}
          <span className="font-mono">∂v/∂x = 1</span>,{' '}
          <span className="font-mono">∂u/∂y = 1</span>,{' '}
          <span className="font-mono">∂v/∂y = 1</span>.
        </p>
      </>
    ),
  },
  {
    title: "Étape 5 — Substitution dans l'équation originale",
    content: (
      <>
        <p className="text-gray-300 mb-3">
          On remplace dans <span className="text-cyan-400 font-mono">∂f/∂x − 3·∂f/∂y = 0</span> :
        </p>
        <div className="bg-gray-800/60 rounded-lg p-4 font-mono text-base text-white border border-gray-600 space-y-2 mb-3">
          <div>[3·(∂F/∂u) + (∂F/∂v)] − 3·[(∂F/∂u) + (∂F/∂v)] = 0</div>
          <div className="text-cyan-400">= 3·(∂F/∂u) + (∂F/∂v) − 3·(∂F/∂u) − 3·(∂F/∂v)</div>
          <div className="text-cyan-400">= −2·(∂F/∂v) = 0</div>
        </div>
        <p className="text-gray-300">
          Donc <span className="text-cyan-400 font-mono">∂F/∂v = 0</span> : la fonction{' '}
          <span className="text-cyan-400 font-mono">F</span> ne dépend pas de{' '}
          <span className="text-cyan-400 font-mono">v</span> !
        </p>
      </>
    ),
  },
  {
    title: "Étape 6 — Conclusion",
    content: (
      <>
        <p className="text-gray-300 mb-3">
          Puisque <span className="text-cyan-400 font-mono">∂F/∂v = 0</span>, il existe une fonction{' '}
          <span className="text-cyan-400 font-mono">h ∈ C¹(ℝ)</span> telle que :
        </p>
        <div className="bg-gray-800/60 rounded-lg p-4 text-center font-mono text-xl text-white border border-gray-600 mb-4">
          F(u, v) = h(u)
        </div>
        <p className="text-gray-300 mb-3">
          En revenant aux variables d&apos;origine (rappel : <span className="text-cyan-400 font-mono">u = 3x + y</span>) :
        </p>
        <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-lg p-5 text-center font-mono text-2xl font-bold text-white border border-cyan-600">
          f(x, y) = h(3x + y)
        </div>
        <p className="text-gray-300 mt-4">
          où <span className="text-cyan-400 font-mono">h</span> est une fonction quelconque de classe{' '}
          <span className="text-cyan-400 font-mono">C¹(ℝ)</span>.
          C&apos;est l&apos;ensemble de toutes les solutions de l&apos;EDP.
        </p>
      </>
    ),
  },
];

export default function PDESolution() {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050b18]">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <BitcoinAnimation />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start p-6 pt-12">
        <div className="w-full max-w-3xl">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Résolution d&apos;une EDP
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Explication pas-à-pas par changement de variables
            </p>
          </div>

          {/* Problem statement */}
          <div className="backdrop-blur-sm bg-gray-900/40 rounded-xl p-6 shadow-2xl border border-gray-700 mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">Problème</h2>
            <p className="text-gray-300 mb-3">
              Trouver toutes les fonctions <span className="text-cyan-400 font-mono">f ∈ C¹(ℝ²)</span> solutions de :
            </p>
            <div className="bg-gray-800/60 rounded-lg p-4 text-center font-mono text-xl text-white border border-gray-600 mb-3">
              ∂f/∂x (x, y) − 3 · ∂f/∂y (x, y) = 0
            </div>
            <p className="text-gray-300">
              On utilisera le changement de variables :{' '}
              <span className="text-cyan-400 font-mono">u = 3x + y</span> et{' '}
              <span className="text-cyan-400 font-mono">v = x + y</span>.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="backdrop-blur-sm bg-gray-900/40 rounded-xl p-6 shadow-xl border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </div>
                {step.content}
              </div>
            ))}
          </div>

          {/* Summary box */}
          <div className="mt-8 backdrop-blur-sm bg-gray-900/40 rounded-xl p-6 shadow-xl border border-cyan-800">
            <h2 className="text-xl font-semibold text-white mb-3">💡 Résumé de la méthode</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Choisir un changement de variables <span className="text-cyan-400 font-mono">φ</span> qui simplifie l&apos;équation.</li>
              <li>Vérifier que <span className="text-cyan-400 font-mono">φ</span> est un <strong className="text-cyan-400">C¹-difféomorphisme</strong>.</li>
              <li>Poser <span className="text-cyan-400 font-mono">F = f ∘ φ⁻¹</span> et calculer les dérivées par la <strong className="text-cyan-400">règle de dérivation en chaîne</strong>.</li>
              <li>Substituer dans l&apos;EDP pour obtenir une équation plus simple sur <span className="text-cyan-400 font-mono">F</span>.</li>
              <li>Résoudre, puis revenir aux variables d&apos;origine.</li>
            </ol>
          </div>

          {/* Back button */}
          <div className="flex justify-center mt-10 mb-8">
            <button
              onClick={() => navigate('/')}
              className="rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:shadow-xl"
            >
              ← Retour
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
