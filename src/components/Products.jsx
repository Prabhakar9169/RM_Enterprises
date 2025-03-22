import React from 'react'

function Products() {
  return (
    <>
      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Products</h2>
          <p className="text-lg text-center mb-8">We deal in following Electrical assets as per requirement of client:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/winding_Resistance.jpeg" alt="Winding Resistance Test Set" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">Winding Resistance Test Set</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/polarity.jpeg" alt="Polarity Test Set" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">Polarity Test Set</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/Short_Circuit_Impedance.jpeg" alt="Short Circuit Impedance Set" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">Short Circuit Impedance Set</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/No_Load_Losses.jpeg" alt="Load/No Load Losses Test" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">Load/No Load Losses Test</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/VCB_Panel.jpeg" alt="VCB Panel" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">VCB Panel</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/LT_Distribution_Panel.jpeg" alt="LT Distribution Panel" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">LT Distribution Panel</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/Motor_Starter_Panel.jpeg" alt="Motor Starter Panel" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">Motor Starter Panel</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/APFC_Panel.jpeg" alt="APFC Panel" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">APFC Panel</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/power_transformer.jpeg" alt="Power Transformer" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">Power Transformer</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/images/Insulation_Resistance_Tester.jpeg" alt="Insulation Resistance Tester" className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2 text-blue-700">Insulation Resistance Tester</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products