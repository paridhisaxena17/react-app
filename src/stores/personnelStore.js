const personnelData = [
    { name: 'Jean Luc', email: 'jeanluc.picard@enterprise.com', phone: '555-111-1111' },
    { name: 'Worf', email: 'worf.moghsson@enterprise.com', phone: '555-222-2222' },
    { name: 'Deanna', email: 'deanna.troi@enterprise.com', phone: '555-333-3333' },
    { name: 'Data', email: 'mr.data@enterprise.com', phone: '555-444-4444' },
  ];
  
  const personnelStore = {
    getData: () => personnelData,
  };
  
  export default personnelStore;