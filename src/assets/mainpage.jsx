import React, { useState } from 'react';
import { CreditCard, X, Send, DollarSign, User } from 'lucide-react';

const CreditCardApp = () => {
  // États pour gérer le popup et les données du formulaire
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Date d'expiration fictive pour la carte
  const expDate = '12/28';
  
  // Pas de numéro de carte
  
  // Nom du titulaire fictif
  const cardHolder = 'JOHN DOE';
  
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && amount) {
      setIsSuccess(true);
      // Réinitialiser le formulaire après 2 secondes et fermer le modal
      setTimeout(() => {
        setIsSuccess(false);
        setIsModalOpen(false);
        setUsername('');
        setAmount('');
      }, 2000);
    }
  };
  
  return (
    <div className="min-h-screen bg-[url(../../public/crypto.jpg)] bg-cover bg-center flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white ">Mon Compte</h1>
          <p className="mt-2 text-white">Gérez vos finances en toute simplicité</p>
        </div>
        
        {/* Card Container */}
        <div className="relative mt-10">
          {/* Credit Card */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <div className="font-bold text-xl">Carte Virtuelle</div>
              <CreditCard size={32} />
            </div>
            
            <div className="mb-6 mt-4">
              {/* Numéro de carte enlevé */}
            </div>
            
            <div className="flex justify-between">
              <div>
                <div className="text-xs text-gray-200">TITULAIRE</div>
                <div className="font-medium">{cardHolder}</div>
              </div>
              <div>
                <div className="text-xs text-gray-200">EXPIRE</div>
                <div className="font-medium">{expDate}</div>
              </div>
            </div>
          </div>
          
          {/* Pas de puce électronique */}
        </div>
        
        {/* Send Money Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center shadow-md transition-colors duration-300"
          >
            <Send className="mr-2" size={18} />
            Envoyer de l'argent
          </button>
        </div>
        
        {/* Balance Card */}
        <div className="bg-white rounded-lg shadow-md p-4 mt-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Solde disponible</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">2,450.75 €</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="text-green-600" size={24} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for sending money */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyer de l'argent</h2>
            
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-green-600 text-2xl">✓</div>
                </div>
                <p className="text-lg font-medium text-gray-800">
                  Transfert réussi !
                </p>
                <p className="text-gray-600 mt-2">
                  {amount}€ ont été envoyés à {username}
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                    Destinataire
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="text-gray-400" size={18} />
                    </div>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Entrez le nom du destinataire"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
                    Montant (€)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="text-gray-400" size={18} />
                    </div>
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0.00"
                      min="0.01"
                      step="0.01"
                    />
                  </div>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center shadow-md transition-colors duration-300"
                >
                  <Send className="mr-2" size={18} />
                  Envoyer maintenant
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCardApp;