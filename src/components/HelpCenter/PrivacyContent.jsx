import React, {useState, useRef, ReactDOM} from 'react';
import { Table } from 'react-bootstrap';

const faqs = [
  {
      id: 1,
      header: "Abidjan",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Abidjan 1</td>
          <td>Achio Beda</td>
          <td>
            <tr>Cocody</tr>
            <tr>Riviera</tr>
            <tr>Bingerville</tr>
          </td>
          <td>01 02 83 08 43</td>
        </tr>
        <tr>
          <td>Abidjan 2</td>
          <td>Diahi Ursule</td>
          <td>
            <tr>Yopougon</tr>
            <tr>Adjamé</tr>
            <tr>Attécoubé</tr>
          </td>
          <td>01 40 92 93 96</td>
        </tr>
        <tr>
          <td>Abidjan 3</td>
          <td>Koffi Felicien Brice</td>
          <td>
            <tr>Cocody</tr>
            <tr>Adjamé</tr>
            <tr>Williamsville</tr>
            <tr>Angré</tr>
            <tr>Abobo</tr>
          </td>
          <td>01 02 83 08 72</td>
        </tr>
        <tr>
          <td>Abidjan 4</td>
          <td>Baffon Achille</td>
          <td>
            <tr>Koumassi</tr>
            <tr>Port-Bouët</tr>
            <tr>Vridi</tr>
          </td>
          <td>01 01 17 86 11</td>
        </tr>
        <tr>
          <td>Abidjan 5</td>
          <td>Yao Abel</td>
          <td>
            <tr>Marcory</tr>
            <tr>Treichville</tr>
          </td>
          <td>01 40 67 37 77</td>
        </tr>
        <tr>
          <td>Abidjan Nord 1</td>
          <td>Amani Bah Romaric</td>
          <td>
            <tr>Abobo</tr>
            <tr>Anyama</tr>
            <tr>Angré</tr>
            <tr>2 Plateaux</tr>
          </td>
          <td>07 59 17 80 34</td>
        </tr>
        <tr>
          <td>Abidjan Nord 2</td>
          <td>Gadji Nina Solange</td>
          <td>
            <tr>Cocody</tr>
            <tr>Bingerville</tr>
          </td>
          <td>07 09 83 54 83</td>
        </tr>
        <tr>
          <td>Abidjan Centre 1</td>
          <td>Zegbolou Jocelyn</td>
          <td>
            <tr>Yopougon</tr>
            <tr>Songon</tr>
          </td>
          <td>07 78 85 92 27</td>
        </tr>
        <tr>
          <td>Abidjan Centre 2</td>
          <td>Konan Kouassi Augustin</td>
          <td>
            <tr>Attécoubé</tr>
            <tr>Plateau</tr>
            <tr>Williamsville</tr>
            <tr>Adjamé</tr>
          </td>
          <td>07 07 58 12 05</td>
        </tr>
        <tr>
          <td>Abidjan Sud 1</td>
          <td>Alla Wilfried</td>
          <td>
            <tr>Treichville</tr>
            <tr>Marcory</tr>
          </td>
          <td>07 08 05 78 45</td>
        </tr>
        <tr>
          <td>Abidjan Sud 2</td>
          <td>Boka Innocent</td>
          <td>
            <tr>Koumassi</tr>
            <tr>Port-Bouët</tr>
            <tr>Vridi</tr>
          </td>
          <td>07 49 97 33 92</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 2,
      header: "Daloa",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Daloa</td>
          <td>Yao Konan Jean Baptiste</td>
          <td>
            <tr>Sinfra</tr>
            <tr>Issia</tr>
            <tr>Bonon</tr>
            <tr>Zonkougbeu</tr>
            <tr>Bediala</tr>
            <tr>Zuenoula</tr>
            <tr>Gohitafla</tr>
            <tr>Kounahiri</tr>
            <tr>Mankono</tr>
            <tr>Dianra( village et sous préfecture) Kani</tr>
            <tr>Tieninboué</tr>
            <tr>Séguéla</tr>
            <tr>Mankono</tr>
            <tr>Vavoua</tr>
            <tr>Zaibo</tr>
          </td>
          <td>05 05 95 95 80</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 3,
      header: "Man",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Man</td>
          <td>Seri Oscar Levis</td>
          <td>
            <tr>Danané</tr> 
            <tr>Biankouma</tr> 
            <tr>Zouanounien</tr> 
            <tr>Bin-houye</tr> 
            <tr>Logoualé</tr> 
            <tr>Sipilou</tr> 
            <tr>Mapleu</tr> 
            <tr>Sanguiné</tr> 
            <tr>Oborne</tr> 
            <tr>Duékoué</tr> 
            <tr>Bangolo</tr> 
            <tr>Facobly</tr> 
            <tr>Kouibly</tr> 
            <tr>Semian</tr> 
            <tr>Guiglo</tr> 
            <tr>Blolequin</tr> 
            <tr>Toulepleu</tr> 
          </td>
          <td>01 03 38 15 47</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 4,
      header: "San Pedro",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>San Pedro</td>
          <td>Deglo Monlé Joachim</td>
          <td>
            <tr>Grabo</tr> 
            <tr>Tabou</tr> 
            <tr>Méagui</tr> 
            <tr>Soubré</tr> 
            <tr>Gueyo</tr> 
            <tr>Buyo</tr> 
            <tr>Grand Zatry</tr> 
            <tr>Okrouyo</tr> 
            <tr>Lillyo Mayo</tr> 
            <tr>Fresco</tr> 
            <tr>Mambehiri</tr>
          </td>
          <td>01 02 83 08 67</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 5,
      header: "Gagnoa",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Gagnoa</td>
          <td>Douho Celestin</td>
          <td>
            <tr>Guibéroua</tr> 
            <tr>Ouragahio</tr> 
            <tr>Oumé</tr> 
            <tr>Hiré</tr> 
            <tr>Guitri</tr> 
            <tr>Ziguisso</tr> 
            <tr>Mankono</tr> 
            <tr>Tiassalé</tr> 
            <tr>N&apos;douci</tr> 
            <tr>Elibou</tr> 
            <tr>Sikensi</tr> 
            <tr>N&apos;zianhoua</tr>   
            <tr>Taabo</tr>
          </td>
          <td>01 02 83 06 67</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 6,
      header: "Bouaké",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Bouaké</td>
          <td>The Alain</td>
          <td>
            <tr>Djébonoua</tr> 
            <tr>Diabo</tr> 
            <tr>Botro</tr> 
            <tr>Marabadiassa</tr> 
            <tr>Bodokro</tr> 
            <tr>Béoumi</tr> 
            <tr>Sakassou</tr> 
            <tr>Bocanda</tr> 
            <tr>Prikro</tr> 
            <tr>Niakara</tr> 
            <tr>Satama sokoro</tr> 
            <tr>Dabakala</tr> 
            <tr>Katiola</tr>   
            <tr>Fronan</tr>  
            <tr>Tortiya</tr>   
            <tr>Niakara</tr> 
          </td>
          <td>01 42 78 99 44</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 7,
      header: "Korhogo",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Korhogo</td>
          <td>Assa Yapi Auguste</td>
          <td>
            <tr>M&apos;Bengue</tr> 
            <tr>Napié</tr> 
            <tr>Sinematiali</tr> 
            <tr>Odienné</tr> 
            <tr>Minian</tr> 
            <tr>Boundiali</tr> 
            <tr>Gbon</tr> 
            <tr>Tengrela</tr> 
            <tr>Ferké</tr> 
            <tr>Mankono</tr> 
            <tr>Kong</tr> 
            <tr>Tortiya</tr> 
            <tr>Dikodougou</tr>   
            <tr>Dianra</tr>
          </td>
          <td>01 02 83 09 40</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 8,
      header: "Agboville",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Agboville</td>
          <td>Adopo Guy</td>
          <td>
            <tr>Adzopé</tr> 
            <tr>Akoupé</tr> 
            <tr>Bongouanou</tr> 
            <tr>Arrah</tr> 
            <tr>M&apos;batto</tr> 
            <tr>Tiemelekro</tr> 
            <tr>Dimbokro</tr> 
            <tr>Kouassi-kouassikro</tr> 
            <tr>Bocanda</tr> 
            <tr>Daoukro</tr> 
            <tr>Ouellé</tr> 
            <tr>Etrokro</tr> 
            <tr>Kregbé</tr>
          </td>
          <td>05 05 95 95 62</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 9,
      header: "Abengourou",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Abengourou</td>
          <td>Lasme Agnimel Julien</td>
          <td>
            <tr>Agnibilekro</tr> 
            <tr>Koun Fao</tr> 
            <tr>Tanda</tr> 
            <tr>Bondoukou</tr> 
            <tr>Bouna</tr> 
            <tr>Doropo</tr> 
            <tr>Dehini</tr> 
            <tr>Tandegué</tr> 
            <tr>Niablé</tr> 
            <tr>Bétié</tr>
          </td>
          <td>07 07 50 40 96</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 10,
      header: "Aboisso",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Aboisso</td>
          <td>Kili Oyao Bruno Calixte</td>
          <td>
            <tr>Bonoua</tr> 
            <tr>Adiaké</tr> 
            <tr>Assini</tr> 
            <tr>Aboisso</tr> 
            <tr>Alépé</tr> 
            <tr>Maféré</tr> 
            <tr>Ayamé</tr> 
            <tr>Tiapoum</tr> 
            <tr>Noé</tr>     
          </td>
          <td>05 05 96 20 46</td>
        </tr>
      </tbody>
    </Table>
  },
  {
      id: 11,
      header: "Yamoussoukro",
      text: <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'#2b6338' }}>Inspection</th>
          <th style={{color:'#2b6338' }}>Responsable</th>
          <th style={{color:'#2b6338' }}>Zone de couverture</th>
          <th style={{color:'#2b6338' }}>Contacts</th>
        </tr>
      </thead>
      <tbody style={{ verticalAlign:'middle' }}>
        <tr>
          <td>Yamoussoukro</td>
          <td>Kouamé Gazé Job</td>
          <td>
            <tr>Bouaflé</tr> 
            <tr>Toumodi</tr> 
            <tr>Tiébissou</tr> 
            <tr>Didiévi</tr> 
            <tr>Oumé</tr> 
            <tr>Djékanou</tr>      
          </td>
          <td>05 05 96 21 81</td>
        </tr>
      </tbody>
    </Table>
  }
]

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

return (
    <div className="rc-accordion-card">
        <div className="rc-accordion-header">
            <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                <h5 className="rc-accordion-title">{header}</h5>
                <i className="fa fa-chevron-down rc-accordion-icon"></i>
            </div>
        </div>
        <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
            active === id
                ? { height: contentEl.current.scrollHeight }
                : { height: "0px" }
        }>
            <div className="rc-accordion-body">
                <p className='mb-0'>{text}</p>
            </div>
        </div>
    </div>
)
}

const PrivacyContent = () => {

const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
  return (
    
    <>
      <div className="container-fluid mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="">
                            <div className="card-body">
                            <h4 className="pb-30" style={{ textAlign: 'center', color:'#3c3c3b', fontSize:'50px', fontWeight:'500' }}>Notre Réseau</h4>
                                {faqs.map((faq, index) => {
                                     return (
                                            <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};

export default PrivacyContent;