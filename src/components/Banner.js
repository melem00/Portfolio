import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useCallback } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const period = 3000; // Time to wait before changing text

    const tick = useCallback(() => {
        let toRotate = ["software developer", "data analyst", "tech enthusiast"];
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => prevLoopNum + 1);
            setDelta(100 - Math.random() * 100);
        }
    }, [isDeleting, loopNum, period, text.length]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [tick, delta]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Michael Elem `}</h1>
                        <p>
                            I'm a <span className="wrap">{text}</span> with a passion for creating innovative solutions. Let's work together to bring your ideas to life!
                        </p>
                        <button onClick={() => console.log('Connect button clicked')} aria-label="Connect with me">
                            Let's Connect
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};