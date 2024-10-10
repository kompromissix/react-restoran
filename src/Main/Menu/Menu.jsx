import './Menu.css'
import bumaga from './Menu-assets/Rectangle40.png'
import bumagaieda from './Menu-assets/Rectangle42.png'

function Menu() {
    return(
        <>
            <section className='background3'>
                <div>
                    <div className='Menu-oglav'>
                        <p>меню</p>
                        <hr />
                    </div>
                    <div className='Menu-text'>
                        <div>
                            <h2>Меню</h2>
                            <p>At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae morbi. <br /> <br />
                            Nunc cras cras aliquet blandit faucibus massa sagittis semper. </p>
                        </div>
                    </div>
                    <div className='Menu-img-div'>
                        <div>
                            <div>
                                <div className='block-div-menu'></div>
                                <img className='img-absolut' src={bumaga} alt="" />
                                <div className='Menu-img-text-bottom'>
                                    <p>Основное меню</p>
                                    <hr />
                                </div>
                            </div>
                            <div>
                                <div className='block-div-menu'></div>
                                <img className='img-absolut' src={bumagaieda} alt="" />
                                <div className='Menu-img-text-bottom'>
                                    <p>Барная карта</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu