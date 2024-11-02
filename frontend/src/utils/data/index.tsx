import {
  FaClinicMedical,
  FaBriefcase,
  FaUserTie,
  FaCalendarAlt,
  FaUsers,
  FaCalculator,
  FaGavel,
  FaWarehouse,
  FaShoppingCart,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaDollarSign,
  FaTruck,
  FaFileMedical,
} from "react-icons/fa";
//      espec: ["0", "00", "10", "20", "30", "40", "50", "70", "90"],

export const cardsData = [
  {
    title: "Clínica",
    icon: <FaClinicMedical size={35} color="#00a32a" />,
    path: "/clinica",
    espec: ["0", "00", "10", "20", "30", "40", "50", "70", "90"],
  },
  {
    title: "Administrativo",
    icon: <FaBriefcase size={35} color="#00a32a" />,
    path: "/administrativo",
  },
  {
    title: "Secretaria",
    icon: <FaUserTie size={35} color="#00a32a" />,
    path: "/secretaria",
  },
  {
    title: "Agenda",
    icon: <FaCalendarAlt size={35} color="#00a32a" />,
    path: "/agenda",
  },
  {
    title: "Recursos Humanos",
    icon: <FaUsers size={35} color="#00a32a" />,
    path: "/recursos-humanos",
  },
  {
    title: "Contábil",
    icon: <FaCalculator size={35} color="#00a32a" />,
    path: "/contabil",
  },
  { title: "NPJ", icon: <FaGavel size={35} color="#00a32a" />, path: "/npj" },
  {
    title: "Estoque",
    icon: <FaWarehouse size={35} color="#00a32a" />,
    path: "/estoque",
  },
  {
    title: "Vendas",
    icon: <FaShoppingCart size={35} color="#00a32a" />,
    path: "/vendas",
  },
  {
    title: "Compras",
    icon: <FaMoneyBillWave size={35} color="#00a32a" />,
    path: "/compras",
  },
  {
    title: "Contas a Pagar",
    icon: <FaHandHoldingUsd size={35} color="#00a32a" />,
    path: "/contas-a-pagar",
  },
  {
    title: "Contas a Receber",
    icon: <FaDollarSign size={35} color="#00a32a" />,
    path: "/contas-a-receber",
  },
  {
    title: "Transporte",
    icon: <FaTruck size={35} color="#00a32a" />,
    path: "/transporte",
  },
  {
    title: "Prontuário",
    icon: <FaFileMedical size={35} color="#00a32a" />,
    path: "/prontuario",
  },
];
