import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className='py-4'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="mb-0 text-black text-center">&copy; {year}. Made with <i class="fa fa-heart" style={{color:'red'}}></i> By Nomi & Hamad.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
