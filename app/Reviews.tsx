// Student reviews on the sales page (owner 2026-11-10: real reviews from Shibori students,
// first name and initial only), all in one block before the first price box. Text-only
// until the owner sends 3 student photos: then move those 3 reviews into PHOTO with a
// photo path (public/reviews/<name>.jpg).

type Review = { name: string; text: string; photo?: string };

const PHOTO: Review[] = [];

const TEXT: Review[] = [
  {
    name: 'Teresa G.',
    text: "The first time I unfolded my dyed fabric I actually laughed because I couldn't believe I'd made that pattern myself! The circles weren't completely even, but the blue and white looked gorgeous together.",
  },
  {
    name: 'Juanita C.',
    text: "I've always loved indigo fabrics and wanted to try making my own. The instructions for folding and binding were easy to follow. My first piece turned out much nicer than I expected!",
  },
  {
    name: 'Holly B.',
    text: "The spider-web patterns are my favorite. I definitely need more practice getting the folds tight enough, but every piece comes out a little different and that's what makes it fun.",
  },
  {
    name: 'Hilda N.',
    text: "I'm 71 and have been sewing for most of my life, but I'd never tried dyeing fabric. This has opened up a whole new hobby for me. I'm planning to use some of my finished pieces in a quilt.",
  },
  {
    name: 'Calvin Q.',
    text: "The indigo process was fascinating. Watching the fabric change color as it comes out of the dye was something I'd never seen before. I had a couple of messy attempts but learned a lot.",
  },
  {
    name: 'Imani S.',
    text: "I made some beautiful blue and white fabric squares over the weekend. My daughter wants me to make her a scarf next. It's such a satisfying feeling opening up the fabric and seeing what happened.",
  },
  {
    name: 'Marlene E.',
    text: "The stitching technique took me longer than the others, but I really like the more detailed patterns it creates. The course explains everything without making it feel overwhelming.",
  },
  {
    name: 'Vivian O.',
    text: "I appreciate that there's information about washing and caring for the fabric too. I wouldn't have known how to finish everything properly otherwise. Very enjoyable craft.",
  },
  {
    name: 'Arturo L.',
    text: "I've done a little tie-dye before, but shibori is a completely different experience. The folding techniques make such interesting geometric designs. Already experimenting with my own patterns.",
  },
];

function Stars() {
  return (
    <span className="rv-stars" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

function Cards({ list, plain = false }: { list: Review[]; plain?: boolean }) {
  return (
    <ul className={`rv-grid${plain ? ' rv-plain' : ''}`}>
      {list.map((r, i) => (
        <li key={i} className="rv-card">
          {r.photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={r.photo} alt="" className="rv-photo" />
          )}
          <div className="rv-body">
            <Stars />
            <p className="rv-text">&ldquo;{r.text}&rdquo;</p>
            <p className="rv-name">{r.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="rv">
      <style>{css}</style>
      <div className="rv-head">
        <p className="rv-eyebrow">Student reviews</p>
        <h2 className="rv-title">What students are making</h2>
      </div>
      {PHOTO.length > 0 && (
        <>
          <Cards list={PHOTO} />
          <div style={{ height: 20 }} />
        </>
      )}
      <Cards list={TEXT} plain />
    </section>
  );
}

const css = `
.rv { padding: 56px 0 24px; }
.rv-head { text-align: center; margin-bottom: 32px; }
.rv-eyebrow { font-size: 13px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); margin: 0 0 8px; }
.rv-title { font-size: 36px; line-height: 1.2; margin: 0; color: var(--ink); text-align: center; }
.rv-stars { color: #e0a43a; letter-spacing: 2px; font-size: 18px; }
.rv-grid { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.rv-card { background: #fff; border: 1px solid rgba(45,74,143,0.12); border-radius: 14px; overflow: hidden; box-shadow: 0 2px 14px rgba(26,31,61,0.05); display: flex; flex-direction: column; }
.rv-photo { width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block; }
.rv-body { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.rv-text { margin: 0; font-size: 17px; line-height: 1.6; color: var(--ink); flex: 1; }
.rv-name { margin: 0; font-size: 15px; font-weight: 700; color: var(--ink); font-family: system-ui, sans-serif; }
.rv-plain .rv-card { background: var(--indigo-pale); box-shadow: none; }
@media (max-width: 860px) { .rv-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px) {
  .rv-title { font-size: 28px; }
  .rv-grid { grid-template-columns: 1fr; gap: 16px; }
}
`;
