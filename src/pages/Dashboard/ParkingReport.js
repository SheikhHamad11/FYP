import React from 'react'

export default function ParkingReport() {
    return (
        <>
            <h1 className='text-center  bg-light  py-3' style={{ color: '#155263', marginTop:'3.2rem' }}>Parking Location Report</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Today's Report</h3>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col my-3">
                        <table>
                            <tr style={{ backgroundColor: '#155263',color:'white' }}>
                                <th>Location</th>
                                <th>Car No.</th>
                                <th>Total Hours</th>
                                <th>Total Paid</th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>TD:5335</td>
                                <td>10</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>NED:456789</td>
                                <td>5</td>
                                <td>500</td>
                            </tr>
                            <tr>
                                <td>Ernst Handel</td>
                                <td>SD:45677</td>
                                <td>7</td>
                                <td>700</td>
                            </tr>
                            <tr>
                                <td>Island Trading</td>
                                <td>DF:456789</td>
                                <td>9</td>
                                <td>900</td>
                            </tr>
                            <tr>
                                <td>Laughing Bacchus Winecellars</td>
                                <td>DM:456789</td>
                                <td>20</td>
                                <td>20000</td>
                            </tr>
                            <tr>
                                <td>Magazzini Alimentari Riuniti</td>
                                <td>CV:4567</td>
                                <td>7</td>
                                <td>7000</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
