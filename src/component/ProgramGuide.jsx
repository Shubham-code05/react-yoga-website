import '../style/programguide.css'
import seatedPose from '../image/yoga-01.png'
import sidePose from '../image/yoga-02.png'
import balancePose from '../image/yoga-03.png'
import stretchPose from '../image/yoga-04.png'

const programs = [
  {
    id: 'meditation',
    eyebrow: '01 / Stillness',
    title: 'Meditation',
    intro: 'Build a steady pause with postures that keep the spine supported and the breath unhurried.',
    image: seatedPose,
    imageAlt: 'Person seated in a calm meditation posture',
    postures: [
      ['Easy seat', 'Sit on a cushion with legs relaxed and hands resting on the thighs.', 'Lengthen through the crown, soften the jaw, and follow each breath for 5 to 10 minutes.'],
      ['Kneeling seat', 'Kneel with the hips supported by a block or cushion and the shoulders stacked over the hips.', 'Inhale to grow tall; exhale to release tension while keeping the gaze soft.'],
      ['Resting pose', 'Lie on your back with the arms open, palms up, and feet comfortably apart.', 'Scan from the forehead to the toes, letting each exhale settle the body.'],
      ['Walking meditation', 'Walk slowly with the feet parallel and the arms loose by your sides.', 'Feel heel, sole, and toes in sequence while matching an even pace to the breath.'],
    ],
  },
  {
    id: 'yoga',
    eyebrow: '02 / Mobility',
    title: 'Yoga',
    intro: 'Move from grounded alignment into spacious shapes, linking every posture to a calm breath.',
    image: sidePose,
    imageAlt: 'Person practicing a strong yoga side angle posture',
    postures: [
      ['Mountain pose', 'Stand with feet grounded, legs active, and the pelvis neutral beneath the ribs.', 'Reach the crown upward as you breathe slowly for 5 to 8 cycles.'],
      ['Downward dog', 'Place hands under the shoulders, lift the hips, and keep the knees softly bent if needed.', 'Press the floor away, lengthen the spine, and pedal the heels gently.'],
      ['Warrior II', 'Turn one foot out, bend the front knee over the ankle, and open the arms wide.', 'Keep the back leg strong and breathe evenly for 5 cycles on each side.'],
      ['Child’s pose', 'Bring the hips toward the heels and fold forward with the forehead supported.', 'Let the back widen with each inhale and stay for 30 to 60 seconds.'],
    ],
  },
  {
    id: 'strength',
    eyebrow: '03 / Strength',
    title: 'Strength & Bodybuilding',
    intro: 'Train the positions that make lifting stronger: a braced trunk, stable feet, and controlled range.',
    image: balancePose,
    imageAlt: 'Person holding a controlled athletic training position',
    postures: [
      ['Squat stance', 'Set the feet about shoulder-width apart, brace the trunk, and keep the chest tall.', 'Send the hips down and back, then drive through the whole foot to stand.'],
      ['Hip hinge', 'Keep a soft bend in the knees and push the hips back while the spine stays long.', 'Squeeze the glutes to return upright; add load only when the pattern feels steady.'],
      ['Push-up position', 'Stack the hands under the shoulders and make one straight line from head to heels.', 'Lower with elbows angled back, pause with control, then press the floor away.'],
      ['Forearm plank', 'Place elbows beneath the shoulders, legs long, and ribs gently drawn toward the hips.', 'Breathe behind the brace for 20 to 40 seconds without letting the hips drop.'],
    ],
  },
  {
    id: 'exercise',
    eyebrow: '04 / Everyday fitness',
    title: 'General Exercise',
    intro: 'A balanced foundation for energy, coordination, and joint-friendly movement you can repeat consistently.',
    image: stretchPose,
    imageAlt: 'Person moving through a dynamic full-body stretch',
    postures: [
      ['Warm-up march', 'Stand tall and lift one knee at a time while swinging the opposite arm.', 'Start easily for 2 minutes, then gradually raise the pace without losing smooth breathing.'],
      ['Reverse lunge', 'Step one foot back and lower both knees while keeping the front knee over the ankle.', 'Press through the front foot to return, alternating sides for 8 to 10 repetitions.'],
      ['Glute bridge', 'Lie on your back with knees bent, feet planted, and arms resting beside you.', 'Lift the hips by squeezing the glutes, pause, then lower slowly for 10 repetitions.'],
      ['Dead bug', 'Lie on your back with arms up and knees bent over the hips.', 'Brace gently as one arm and the opposite leg reach away, then return and switch sides.'],
    ],
  },
]

function ProgramGuide() {
  return (
    <section className="program-guide" id="programs">
      <div className="program-guide-intro">
        <p className="program-guide-kicker">The movement library</p>
        <h2>Practice with purpose.</h2>
        <p className="program-guide-lede">A clear starting point for every body. Explore the essential positions, then make the process your own with patience and consistency.</p>
        <div className="program-guide-index" aria-label="Program guide sections">
          {programs.map((program) => <a key={program.id} href={`#${program.id}`}>{program.title}</a>)}
        </div>
      </div>

      <div className="program-list">
        {programs.map((program) => (
          <article className="program-panel" id={program.id} key={program.id}>
            <div className="program-image-wrap">
              <img src={program.image} alt={program.imageAlt} />
            </div>
            <div className="program-content">
              <p className="program-eyebrow">{program.eyebrow}</p>
              <h3>{program.title}</h3>
              <p className="program-intro">{program.intro}</p>
              <div className="posture-grid">
                {program.postures.map(([name, setup, process], index) => (
                  <div className="posture-card" key={name}>
                    <span>0{index + 1}</span>
                    <h4>{name}</h4>
                    <p><strong>Set up</strong> {setup}</p>
                    <p><strong>Process</strong> {process}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProgramGuide