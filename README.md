# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

    <div className="team">
        {data.aboutUs.team.map((member, idx) => (
          <div isFlipped={isFlipped} flipDirection="vertical" key={idx}>
            {/* <div className={`member`} onClick={() => handleFlip(idx)}> */}
            <div className="front">
              <img src={member.src} alt={member.alt} />
            </div>
            <div className={`back`}>
              <h4>{member.name}</h4>
              <p>{member.position}</p>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>