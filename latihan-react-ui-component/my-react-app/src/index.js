//Contoh kode Nested React Element (menggunakan fungsi createElement) :
// Import React library dan createRoot dari react-dom/client
import React from 'react';
import { createRoot } from 'react-dom/client';

// Membuat elemen heading h1 dengan teks 'Biodata Perusahaan'
const heading = React.createElement('h1', null, 'Biodata Perusahaan');
// Membuat elemen list item untuk nama perusahaan
const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
// Membuat elemen list item untuk bidang perusahaan
const listItem2 = React.createElement('li', null, 'Bidang: Education');
// Membuat elemen list item untuk tagline perusahaan
const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');

// Membuat elemen unordered list (ul) yang berisi ketiga list item di atas
const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);
// Membuat elemen container yang berisi heading dan unordered list
const container = React.createElement('dic', null, [heading, unorderedList]);

// Membuat root element untuk React menggunakan createRoot
const root = createRoot(document.getElementById('root'));
// Merender container ke dalam root element
root.render(container);
