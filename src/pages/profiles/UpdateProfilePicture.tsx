import { Avatar, Badge, ButtonBase, styled } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from "react";
import Logo from '../../assets/Logo.png';

const UpdateProfilePicture = () => {
  // State untuk menyimpan URL gambar avatar
  const [avatarSrc, setAvatarSrc] = useState<string | undefined>(undefined);

  // Memuat avatar dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatarSrc");
    if (savedAvatar) {
      setAvatarSrc(savedAvatar); // Jika ada gambar di localStorage, set gambar tersebut
    }
  }, []);

  // Fungsi untuk menangani perubahan avatar
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Membaca file gambar sebagai data URL
      const reader = new FileReader();
      reader.onload = () => {
        const newAvatar = reader.result as string;
        setAvatarSrc(newAvatar);
        // Simpan gambar ke localStorage setelah berhasil memilih gambar baru
        localStorage.setItem("avatarSrc", newAvatar);
      };
      reader.readAsDataURL(file);
    }
  };

  // Styled component untuk ikon kecil edit
  const SmallIcon = styled(EditIcon)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: theme.palette.background.default, // Tambahkan warna latar belakang
    borderRadius: '50%', // Untuk membuatnya bundar
    padding: 2, // Menambahkan padding agar lebih pas di badge
  }));

  return (
    <>
    <ButtonBase
      component="label"
      role={undefined}
      tabIndex={-1} // prevent label from tab focus
      aria-label="Avatar image"
      sx={{
        borderRadius: '40px',
        '&:has(:focus-visible)': {
          outline: '2px solid',
          outlineOffset: '2px',
        },
      }}
    >
      {/* Badge dengan ikon edit di pojok kanan bawah */}
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<SmallIcon />}
      >
        {/* Avatar yang dapat diganti */}
        <Avatar
          alt="Profile Picture"
          src={avatarSrc || Logo} // Gunakan avatar yang dipilih atau gambar default
          sx={{ width: 120, height: 120 }} // Ukuran Avatar
        />
      </Badge>

      {/* Input file untuk memilih gambar avatar */}
      <input
        type="file"
        accept="image/*"
        style={{
          border: 0,
          clip: 'rect(0 0 0 0)',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          whiteSpace: 'nowrap',
          width: '1px',
        }}
        onChange={handleAvatarChange} // Panggil fungsi saat file dipilih
      />
      </ButtonBase>
    </>
  );
};

export default UpdateProfilePicture;
