import Image from '../../components/Image';
import { Col, Row, Container } from 'react-bootstrap';
import './styles.css';

export default function HomePage() {
    return (
        <>
            <section>
                <div className='center'>
                <Container className='content'>
                    <Row className='content-products'>
                        <Col md={4} sm={6} xs={12}>
                            <div className='card'>
                                <h2 className='card-title'>Coffee</h2>
                                <Image className='image'
                                    src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'}
                                    alt={'Imagem de café'}
                                />
                                <p className='card-description'>lorem ipsum</p>
                                <button className='card-button'>Comprar</button>
                            </div>                            
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <div className='card'>
                                <h2 className='card-title'>Coffee</h2>
                                <Image className='image'
                                    src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'}
                                    alt={'Imagem de café'}
                                />
                                <p className='card-description'>lorem ipsum</p>
                                <button className='card-button'>Comprar</button>
                            </div>                            
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <div className='card'>
                                <h2 className='card-title'>Coffee</h2>
                                <Image className='image'
                                    src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'}
                                    alt={'Imagem de café'}
                                />
                                <p className='card-description'>lorem ipsum</p>
                                <button className='card-button'>Comprar</button>
                            </div>                            
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <div className='card'>
                                <h2 className='card-title'>Coffee</h2>
                                <Image className='image'
                                    src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'}
                                    alt={'Imagem de café'}
                                />
                                <p className='card-description'>lorem ipsum</p>
                                <button className='card-button'>Comprar</button>
                            </div>                            
                        </Col>
                    </Row>
                </Container>
                </div>
            </section>
        </>
    )
}